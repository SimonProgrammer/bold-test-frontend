import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'WidgetFilter',
  props: {
    filterInit: {
      type: String,
      default: 'today'
    }
  },
  setup(){
    const { locale, t } = useI18n({
      inheritLocale: true
    })

    return { locale, t }
  },
  data: () => ({
    filters: [] as String[]
  }),
  beforeMount(){
    this.filters = this.prepareFilterData();
  },
  methods:{
    closeWidget(){
      this.$emit('close');
    },
    applyFilter(){
      const { filters }: { filters: String[] } = this;
      this.$emit('filter', { filters });
    },
    prepareFilterData() : any[]{
      const { filterInit }: { filterInit: string } = this;
      return filterInit.split(',');
    },
  }
})