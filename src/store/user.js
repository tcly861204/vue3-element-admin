import { defineStore } from 'pinia'
export default defineStore({
  id: 'user',
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {
    updateCount() {
      this.count++
    },
  },
})
