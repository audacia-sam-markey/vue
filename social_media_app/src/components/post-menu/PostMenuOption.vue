<template>
  <router-link :to="{ name: props.name }">{{ props.value }}</router-link>
</template>

<script setup lang="ts">
const props = defineProps({
  value: { type: String, required: true },
  name: { type: String, required: true },
});
</script>

<style scoped lang="scss">
a {
  border-radius: $rounded;
  background-color: $highlight;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  min-width: 25%;
  text-align: center;
}
</style>
