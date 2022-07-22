import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../stores/filter'
import getDataFilter from '../../services/get-data-filter'

import WidgetFilter from '@/components/widget-filter/WidgetFilter.vue'

export default defineComponent({
  name: 'FilterData',
  components:{
    WidgetFilter
  },
  setup(){
    const store = useStore()
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t, store }
  },
  data: () => ({
    showFilter: false,
    listFilter: [] as String[],
    monthName: '',
    periodFilter: ''
  }),
  created(){
    this.monthName = this.getMonthCapitalize();
    this.prepareDataFilter();
    this.searchData();
  },
  computed: {
    periodSelected(){
      return this.periodFilter;
    },
    filterInit() : String{
      const { store: { type }} = this;
      return type;
    },
    filterTime() : String{
      const { store: { time }} = this;
      return time;
    }
  },
  watch:{
    filterTime(){
      this.searchData();
    },
    filterInit(){
      this.searchData();
    }
  },
  methods:{
    changeStatusFilter(status: boolean){
      this.showFilter = status;
    },
    assignFilter({ filters }:any){
      this.listFilter = filters;
      const { listFilter  } : { listFilter: String[] } = this;
      this.changeStatusFilter(false);
      this.store.$patch({
        type: listFilter.join(',')
      });
    },
    getMonthCapitalize(){
      const month = new Date().toLocaleString('es-ES', { month: 'long' });
      return month.charAt(0).toUpperCase() + month.slice(1);
    },
    prepareDataFilter(){
      this.periodFilter = this.store.time;
      this.assignFilterName();
    },
    selectTimeFilter(time: string){
      this.periodFilter = time;
      this.assignFilterTime();
    },
    assignFilterTime(){
      const { periodFilter: time } = this;
      this.store.$patch({
        time
      });
      this.assignFilterName();
    },
    assignFilterName(){
      const { store: { time: timeFilter }, monthName } = this;
      const filterName = (timeFilter === 'today' ? 
                this.t('common_text_today') :
                (timeFilter === 'week') ? this.t('common_text_week') :
                monthName).toLowerCase();
      this.store.$patch({ filterName });
    },
    async searchData(){
      const { store: { time, type }  } = this;
      const listData = await getDataFilter(type, time);
      this.store.$patch({ listData });
    }
  }
})