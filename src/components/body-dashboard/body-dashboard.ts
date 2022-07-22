import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import SalesDay from '@/components/sales-day/SalesDay.vue'
import FilterData from '@/components/filter-data/FilterData.vue'
import ListData from '@/components/list-data/ListData.vue'
import { useStore } from '../../stores/filter'

export default defineComponent({
  name: 'BodyDashboard',
  components:{
    SalesDay,
    FilterData,
    ListData
  },
  setup(){
    const store = useStore()
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t, store }
  },
  computed: {
    items(){
      return this.store.listData;
    },
    namePeriod(){
      const { store: { time: timeFilter } } = this;
      let month = new Date().toLocaleString('es-ES', { month: 'long' });
      const nameP = (timeFilter === 'today' ? 
                `${month} ${new Date().getDate()}` :
                (timeFilter === 'week') ? this.t('common_text_week') :
                `${month} ${new Date().getFullYear()}`).toLowerCase();
      return nameP.charAt(0).toUpperCase() + nameP.slice(1);
    },
    titlePeriod(){
      const { store: { time: timeFilter } } = this;
      let month = new Date().toLocaleString('es-ES', { month: 'long' });
      return (timeFilter === 'today' ? 
                this.t('common_text_today') :
                (timeFilter === 'week') ? this.t('common_text_week') :
                `${month}`).toLowerCase();
    }
  }
})