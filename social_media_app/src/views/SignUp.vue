<template>
  <div>
    <TitleHeadingVue header="Sign up" />
    <AlertVue v-if="alertStore.$state.alertState" />
    <SignUpForm />
  </div>
</template>

<script setup lang="ts">
import SignUpForm from "../components/SignUpForm.vue";
import AlertVue from "../components/AlertModal.vue";
import { AlertStore } from "@/stores/alert.store";
import TitleHeadingVue from "../components/TitleHeading.vue";

const alertStore = AlertStore();
</script>

<style scoped lang="scss"></style>
