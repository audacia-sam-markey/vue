<template>
  <div>
    <TitleHeadingVue header="Sign in" />
    <AlertVue v-if="alertStore.$state.alertState" />
    <SignInForm />
  </div>
</template>

<script setup lang="ts">
import SignInForm from "../components/SignInForm.vue";
import AlertVue from "../components/AlertModal.vue";
import { AlertStore } from "@/stores/alert.store";
import TitleHeadingVue from "@/components/TitleHeading.vue";

const alertStore = AlertStore();
</script>

<style scoped></style>
