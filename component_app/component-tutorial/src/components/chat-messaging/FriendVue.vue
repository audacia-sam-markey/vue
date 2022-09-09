<template>
  <div class="friend-container" @click="loadNewMessages">
    <h2>{{ props.friendDetails.name }}</h2>
    <img :src="props.friendDetails.profilePicture" alt="profile picture" />
  </div>
</template>

<script setup lang="ts">
import type { Friend } from "@/models/Friend.model";
import type { PropType } from "vue";

const props = defineProps({
  friendDetails: { type: Object as PropType<Friend>, required: true },
});
const emit = defineEmits(["loadNewMessages"]);

function loadNewMessages() {
  emit("loadNewMessages");

}
</script>

<style lang="scss" scoped>
.friend-container {
  padding: 5px;
  border: solid 2px #000;
  max-width: 100%;
  height: 100px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: lightcoral;
  }

  img {
    max-width: 30%;
    border-radius: 50px;
  }

  h2 {
    font-size: 1rem;
  }
}
</style>
