import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { IPayment } from '../../services/get-data-filter'
import currencyCOP from '../../filters/currency-cop'

export default defineComponent({
  name: 'SalesDay',
  props: {
    items: {
      type: Array<IPayment>,
      default: () => ([] as IPayment[])
    },
    namePeriod: {
      type: String,
      default: ''
    },
    titlePeriod: {
      type: String,
      default: ''
    }
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
  data:() => ({
    amount: ''
  }),
  watch:{
    items(){
      this.formatAmout();
    }
  },
  beforeMount(){
    this.formatAmout();
  },
  methods:{
    formatAmout(){
      let amount = 0;
      this.items.forEach(item => {
        amount += item.amount;
      });
      this.amount = currencyCOP(amount);
    }
  }
})