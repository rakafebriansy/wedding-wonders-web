import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return { isLogin: false }
  },
  actions: {
    updateLogin() {
      this.isLogin = true;
    },
    updateLogout() {
      this.isLogin = false;
    }
  },
})