import { defineStore } from 'pinia'
import { IPayment } from '../services/get-data-filter'

export const useStore = defineStore('filter', {
  state: () => {
    return {
      time: 'today',
      type: 'all',
      filterName: '',
      listData: [] as IPayment[]
    }
  },
})