import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '../../stores/filter'

import { IPayment } from '../../services/get-data-filter'
import currencyCOP from '../../filters/currency-cop'
import formatDate from '../../filters/format-date'

export default defineComponent({
  name: 'ItemData',
  props: {
    items: {
      type: Array<IPayment>,
      default: () => ([] as IPayment[])
    }
  },
  setup(){
    const store = useStore()
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t, store }
  },
  methods:{
    currency(number: number){
      return currencyCOP(number);
    },
    formatDateItem(date: string){
      return formatDate(date);
    }
  }
})