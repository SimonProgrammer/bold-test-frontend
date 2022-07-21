import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'WidgetFilter',
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
  data: () => ({
    filters: []
  }),
  methods:{
    closeWidget(){
      this.$emit('close');
    },
    applyFilter(){
      const { filters }: { filters: any } = this;
      this.$emit('filter', { filters });
    }
  }
})