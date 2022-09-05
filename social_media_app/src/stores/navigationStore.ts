import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";

export const navigatinoStore = defineStore("navigationStore", () => {
  const showAccountOptions: Ref<boolean> = ref(false);

  const toggleAccountOptions = () => {
    showAccountOptions.value = !showAccountOptions.value;
  };
  const resetAccountOptions = () => {
    showAccountOptions.value = false;
  };
  return { resetAccountOptions, toggleAccountOptions, showAccountOptions };
});
