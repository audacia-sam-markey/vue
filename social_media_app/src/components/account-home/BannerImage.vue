<template>
  <div class="banner-container" :style="bannerStyle"></div>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import type { StyleValue } from "vue";

const userStore = UserStore();

const bannerImg: StyleValue = userStore.currentUser
  ? userStore.currentUser.profileBanner
  : "";
const bannerStyle = {
  "background-image": "url(" + bannerImg + ")",
};

console.log("banner", bannerImg);
</script>

<style scoped lang="scss">
.banner-container {
  width: 100%;
  height: 35vh;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
