import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  state: () => {
    return { pageNum: 1 }
  },
  actions: {
    changeCurrentPage(pageNum) {
      this.pageNum = pageNum;
    },
    getCurrentPage(pageNum) {
      return this.pageNum;
    },
    nextPage() {
      this.pageNum++;
    }
  },
})