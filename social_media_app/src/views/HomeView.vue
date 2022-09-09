<template>
  <div>
    <AlertVue v-if="alertStore.$state.alertState" />
  </div>
</template>
<script setup lang="ts">
import AlertVue from "../components/AlertModal.vue";
import { AlertStore } from "@/stores/alert.store";

const alertStore = AlertStore();
</script>

<style scoped lang="scss">
div {
  font-size: 10rem;
}
</style>
