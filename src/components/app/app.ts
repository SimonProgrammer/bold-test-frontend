import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderDashboard from '@/components/header-dashboard/HeaderDashboard.vue'

export default defineComponent({
  name: 'App',
  components:{
    HeaderDashboard
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
})