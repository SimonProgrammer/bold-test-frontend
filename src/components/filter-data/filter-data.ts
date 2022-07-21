import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import WidgetFilter from '@/components/widget-filter/WidgetFilter.vue'

export default defineComponent({
  name: 'FilterData',
  components:{
    WidgetFilter
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
  data: () => ({
    showFilter: false,
    widgetFilter: []
  }),
  methods:{
    changeStatusFilter(status: boolean){
      this.showFilter = status;
    },
    assignFilter({ filters }:any){
      this.widgetFilter = filters;
      this.changeStatusFilter(false);
    }
  }
})