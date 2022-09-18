<!-- eslint-disable no-unused-vars -->
<template>
  <h1>Welcome, {{ userStore.currentUser?.firstname }}</h1>
</template>

<script setup lang="ts">
import type { User } from "@/models/user.model";
import { UserStore } from "@/stores/user.store";
import type { Store } from "pinia";
import type { Ref } from "vue";

const userStore: Store<
  "UserStore",
  {
    isUserLoggedIn: Ref<boolean>;
    currentUser: User | null;
  }
> = UserStore();
</script>

<style scoped>
h1 {
  font-size: 3rem;
  font-weight: 400;
}
</style>
