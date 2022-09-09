<template>
  <header>1.header
    <nav>
      <HeaderLink
        v-for="link in headerLinks"
        :key="link.linkName"
        :headerLink="link"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "@/models/RouterLink.models";
import HeaderLink from "./HeaderLink.vue";

const headerLinks: RouterLink[] = [
  new RouterLink("home", "Home"),
  new RouterLink("home", "Tweets"),
  new RouterLink("home", "Posts"),
  new RouterLink("home", "Profile"),
];
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 100%;
  nav {
    height: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
  }
}
</style>
