<template>
  <div class="profile-img-container">
    <img :src="profilePicture" alt="profile picture " />
  </div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";

const userStore = UserStore();

const profilePicture: string =
  userStore.currentUser?.profilePicture !== undefined
    ? userStore.currentUser.profilePicture
    : "";
</script>

<style scoped lang="scss">
.profile-img-container {
  width: 10rem;

  margin-top: 2rem;

  img {
    border-radius: $rounded;

    max-width: 100%;
  }
}
</style>
