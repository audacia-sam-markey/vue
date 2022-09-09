<template>
  <div class="messageView-container">
    <Message
      v-for="(message, index) in messages"
      :key="index"
      :messageDetails="message"
    />
  </div>
</template>

<script setup lang="ts">
import { message } from "@/models/Message.model";
import Message from "./Message.vue";

const messages: message[] = [
  new message("sam markey", "hello there"),
  new message("John Smith", "hello there"),
  new message("sam markey", "hello there"),
  new message("John Smith", "hello there"),
  new message("sam markey", "hello there"),
  new message("John Smith", "hello there"),
  new message("sam markey", "hello there"),
  new message("John Smith", "hello there"),
  new message("sam markey", "hello there"),
  new message("John Smith", "hello there"),
];
</script>

<style lang="scss" scoped>
.messageView-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  width: 100%;
  height: 86vh;
  overflow-y: auto;

  :nth-child(even) {
    align-self: flex-end;
  }
}
</style>
