import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import SalesDay from '@/components/sales-day/SalesDay.vue'
import FilterData from '@/components/filter-data/FilterData.vue'
import ListData from '@/components/list-data/ListData.vue'

export default defineComponent({
  name: 'BodyDashboard',
  components:{
    SalesDay,
    FilterData,
    ListData
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
})