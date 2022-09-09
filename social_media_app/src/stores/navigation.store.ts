import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

export const navStore = defineStore("navigationStore", {
  state: () => ({
    showAccountOptions: ref(false) as Ref<boolean>,
  }),
  actions: {
    toggleAccountOptions() {
      this.showAccountOptions = !this.showAccountOptions;
    },
    resetAccountOptions() {
      this.showAccountOptions = false;
    },
  },

  getters: {},
});
