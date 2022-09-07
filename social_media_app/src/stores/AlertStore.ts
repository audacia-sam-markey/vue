
import { defineStore } from "pinia";

import { ref, type Ref } from "vue";

export const AlertStore = defineStore("AlertStore", () => {
  const alertState: Ref<boolean> = ref(false);

  const toggleAlert = () => {
    alertState.value = !alertState.value;
  };

  return { toggleAlert, alertState };
});
