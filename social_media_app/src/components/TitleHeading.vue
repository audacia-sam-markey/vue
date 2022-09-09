<template>
  <div>
    <span></span>
    <h1>{{ props.header }}</h1>
    <span></span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  header: { type: String, required: true },
});
</script>

<style scoped lang="scss">
div {
  margin-top: 2rem;
  @include flexTemp(row, center, center);
  width: 80%;
  gap: 30px;
}
span {
  width: 20%;
  height: 3px;
  background-color: $highlight;
  border-bottom: solid 2px $highlight;
  margin-bottom: 1rem;
}

h1 {
  cursor: default;

  font-size: 3.5rem;
  transition: text-shadow 0.1s ease-in-out;

  &:hover {
    text-shadow: 4px 3px $highlight;
  }
}
</style>
