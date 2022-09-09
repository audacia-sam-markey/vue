<template>
  <div class="blur"></div>
  <div class="alert-container">
    <span
      @click="alertStore.toggleAlert()"
      class="material-symbols-outlined close"
    >
      close
    </span>
    <div class="message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { AlertStore } from "@/stores/alert.store";

const alertStore = AlertStore();
const message = alertStore.$state.alertMessage;
</script>

<style scoped lang="scss">
.blur {
  z-index: 1000;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  right: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
}

$alertWidth: 50vmin;
$alertHeight: 25vmin;
.alert-container {
  z-index: 1001;
  @include flexTemp(column, center, space-between);
  border-radius: 2vmin;
  background-color: $success;
  position: fixed;
  left: calc(50% - ($alertWidth / 2));
  bottom: calc(50% - ($alertHeight / 2));
  width: $alertWidth;
  min-height: $alertHeight;
  color: $foreground;
  .close {
    border-radius: 1vmin;
    align-self: flex-end;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    text-align: right;
    font-size: 3rem;

    &:hover {
      color: $background;
      background-color: $successHover;
      border: $background solid 2px;
    }
  }

  .message {
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    font-weight: bold;
    margin-bottom: 10vmin;
    font-size: 2rem;
  }
}
</style>
