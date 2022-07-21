import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import TableData from '@/components/table-data/TableData.vue'

export default defineComponent({
  name: 'ListData',
  components:{
    TableData
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
})