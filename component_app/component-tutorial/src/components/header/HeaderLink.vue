<template>
  header link =
  <router-link :to="{ name: headerLink.linkName }">{{
    headerLink.linkValue
  }}</router-link>
</template>

<script setup lang="ts">
import type { RouterLink } from "@/models/routerLink.models";
import type { PropType } from "vue";

const props = defineProps({
  headerLink: { type: Object as PropType<RouterLink>, required: true },
});
</script>

<style lang="scss" scoped>
a {
  padding: 1rem;
  border: solid 2px;
}
</style>
