<template>
  <div v-if="modalMessage.length" class="background-blur"></div>
  <div v-if="modalMessage.length" class="modal-container">
    <div @click="closeModal" class="close">X</div>
    {{ modalMessage }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modalMessage: { type: String, required: true },
});
const emit = defineEmits(["close"]);

function closeModal() {
  emit("close");
}
</script>

<style lang="scss" scoped>
.background-blur {
  backdrop-filter: blur(10px);
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: fixed;
}
.modal-container {
  border-radius: 4vmin;
  background-color: lightgreen;
  z-index: 100;
  position: fixed;
  width: 60vmin;
  height: 30vmin;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: calc(50% - 15vmin);
  left: calc(50% - 30vmin);
}
.close {
  cursor: pointer;
  font-size: 2rem;
  align-self: flex-end;

  padding: 0.5rem;
  text-align: center;
  color: rgb(255, 56, 56);

  &:hover {
    transform: scale(1.2);
  }
}
</style>
