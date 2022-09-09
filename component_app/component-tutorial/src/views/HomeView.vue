<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderNavigation from "@/components/header/HeaderNavigation.vue";
import Sidebar from "@/components/sidebar/SideBar.vue";

import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ChatMessaging from "@/components/chat-messaging/ChatMessaging.vue";
import { ref, type Ref } from "vue";

const loadingData: Ref<boolean> = ref(false);
const messageState: Ref<boolean> = ref(false);
</script>

<template>
  <HeaderNavigation id="header" />
  <Sidebar  />

  <ChatMessaging />
  <LoadingSpinner v-show="loadingData" id="loading-spinner" />
  <RouterView />
</template>

<style lang="scss">
#header {
  grid-column: 1/-1;
  grid-row: 1;
}

.sidebar {
  background: rgb(194, 194, 194);
  grid-column: 9/-1;
  grid-row: 1/10;
}

.chat-messaging {
  grid-column: 1/9;
  grid-row: 2/10;
}
</style>
