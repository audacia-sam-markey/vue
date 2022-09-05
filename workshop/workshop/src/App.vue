<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Workshop from "./components/Workshop.vue";

export default defineComponent({
  components: { Workshop },
  setup() {
    return {};
  },
});
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div>
    <Workshop msg='hello there'/>
  </div>
</template>

<style scoped></style>
