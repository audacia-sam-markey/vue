<template>
  <div @click="toggleModal" class="sidebar-option">
    <router-link :to="{ name: sideOption.sidebarName }">{{
      sideOption.sidebarValue
    }}</router-link>
    <img :src="sideOption.imgLink" :alt="sideOption.imgAlt" />
  </div>
</template>

<script setup lang="ts">
import type { sideBarOption } from "@/models/SideBarOptions.model";
import type { PropType } from "vue";

const props = defineProps({
  sideOption: { type: Object as PropType<sideBarOption>, required: true },
});
const emit = defineEmits(["showModal"]);

function toggleModal() {
  emit("showModal");
}
</script>

<style scoped lang="scss">
.sidebar-option {
  height: 4rem;
  width: 90%;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  margin: 0.4rem 0;
  padding: 0.2rem 0.5rem;
  border-top: 2px solid #f1f1f1;
  transition:background-color 0.2s ease-in-out;
  border-bottom: 2px solid #f1f1f1;

  &:hover{
    background-color: #fff;
  }

  img {
    aspect-ratio: 1/1;
    max-height: 100%;
  }
}
</style>
