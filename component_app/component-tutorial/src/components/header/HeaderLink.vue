<template>
  <router-link :to="{ name: headerLink.linkName }">{{
    headerLink.linkValue
  }}</router-link>
</template>

<script setup lang="ts">
import type { RouterLink } from "@/models/router-link.models";
import type { PropType } from "vue";

const props = defineProps({
  headerLink: { type: Object as PropType<RouterLink>, required: true },
});
</script>

<style lang="scss" scoped>
a {
  padding: 1rem;
  padding-bottom: 0;
  transition: all 0.2s ease-in-out;
  color: #fff;

  &:hover {
    border-bottom: 1px solid #000;
  }
}
</style>