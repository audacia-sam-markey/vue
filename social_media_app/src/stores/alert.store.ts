import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const AlertStore = defineStore("AlertStore", {
  state: () => ({
    alertState: ref(false) as Ref<boolean>,
    alertMessage: ref("") as Ref<string>,
  }),
  actions: {
    toggleAlert() {
      this.alertState = !this.alertState;
    },
    changeAlertMessage(message: string) {
      this.alertMessage = message;
    },
    getters: {},
  },
});
