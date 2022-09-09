<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body,
html {
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
}

#app {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
</style>
