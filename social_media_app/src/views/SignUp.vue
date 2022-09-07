<template>
  <div>
    <AlertVue message="Success" v-if="alertStore.alertState" />
    <SignUpForm />
  </div>
</template>

<script setup lang="ts">
import SignUpForm from "../components/SignUpForm.vue";
import AlertVue from "../components/Alert.vue";
import { AlertStore } from "@/stores/AlertStore";

const alertStore = AlertStore();

console.log(alertStore.alertState);
</script>

<style scoped lang="scss"></style>
