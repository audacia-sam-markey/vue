<template>
  <div class="sidebar-option">
    sidebar option=
    <router-link :to="{ name: sideOption.sidebarName }">{{
      sideOption.sidebarValue
    }}</router-link>
    <img :src="sideOption.imgLink" :alt="sideOption.imgAlt" />
  </div>
</template>

<script setup lang="ts">
import type { sideBarOption } from "@/models/sideBarOptions.model";
import type { PropType } from "vue";

const props = defineProps({
  sideOption: { type: Object as PropType<sideBarOption>, required: true },
});
</script>

<style scoped lang="scss">
.sidebar-option {
  min-height: 4rem;
  width: 90%;
  display: flex;

  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  border: solid 3px #000;
  img {
    max-width: 30%;
  }
}
</style>
