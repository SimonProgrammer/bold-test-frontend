import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'SalesDay',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
})