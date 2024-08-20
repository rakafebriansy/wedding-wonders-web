import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => {
    return { isAlert: false, message: 'Error', success: false }
  },
  actions: {
    showAlert(message, success) {
      this.message = message;
      this.success = success;
      this.isAlert = true;
    },
    hideAlert() {
      this.message = 'Error';
      this.isAlert = false;
    }
  },
})