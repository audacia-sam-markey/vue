<template>
  <div class="chat-messaging chatMessaging-container">
    <FriendsList @loadSpinner="loadSpinner" />
    <LoadingSpinner v-if="spinnerState" />

    <MessageView v-else />
  </div>
</template>

<script setup lang="ts">
import FriendsList from "./FriendsList.vue";
import MessageView from "./MessageView.vue";
import LoadingSpinner from "../LoadingSpinner.vue";
import { type Ref, ref } from "vue";
const spinnerState: Ref<boolean> = ref(false);
console.log(spinnerState.value);

function loadSpinner() {
  spinnerState.value = !spinnerState.value;
  setTimeout(() => {
    spinnerState.value = false;
  }, 3000);
}
</script>

<style lang="scss" scoped>
.chatMessaging-container {
  display: flex;
}
</style>
