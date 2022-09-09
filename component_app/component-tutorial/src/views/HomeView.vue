<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderNavigation from "@/components/header/HeaderNavigation.vue";
import Sidebar from "@/components/sidebar/SideBar.vue";
import Modal from "@/components/Modal.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import ChatMessaging from "@/components/chat-messaging/ChatMessaging.vue";
import { ref, type Ref } from "vue";

const loadingData: Ref<boolean> = ref(false);
const messageState: Ref<boolean> = ref(false);
</script>

<template>
  <HeaderNavigation id="header" />
  <Sidebar id="sidebar" />
  <Modal v-show="messageState" id="modal" />
  <LoadingSpinner v-show="loadingData" id="loading-spinner" />
  <ChatMessaging id="chat-messaging" />
  <RouterView />
</template>

<style scoped lang="scss">
#header {
  grid-column: 1/-1;
  grid-row: 1;

}

#sidebar {
  grid-column: 9/-1;
  grid-row: 1/10;
  background-color: lightgreen;
}

#chat-messaging {
  grid-column: 1/9;
  grid-row: 2/10;
  background-color: lightsteelblue;
}
</style>
