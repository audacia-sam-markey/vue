<template>
  <Nav />
  <RouterView />
</template>

<script setup lang="ts">
import Nav from "./components/Nav.vue";

components: {
  Nav;
}
</script>

<style lang="scss">
:root {
  --foreground: #fff;
  --background: #000;
  --highlight: #77d491;
  --hover: #cdcdcd;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  position: relative;
  text-decoration: none;
  transform: scale(1);
  color: var(--background);
  
}
a::after {
  content: "";
  transition: all 0.1s ease-in-out;
  position: absolute;
  bottom: -2%;
  left: 0;
  height: 1.5px;
  width: 0px;
  background: var(--background);
}
a:hover::after {

  width: 100%;
}

body {
  width: 100%;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
