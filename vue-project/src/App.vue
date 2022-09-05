<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <router-link :to="{ name: 'EmployeeTable' }">Employee table </router-link>
    <router-link :to="{ name: 'home' }">Insert Employee</router-link>
  </nav>

  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}
body {
  font-family: "Montserrat", sans-serif;
}

nav {
  margin-top: 1rem;
  margin-left: 2rem;
  display: flex;
  gap: 30px;
}
a {
  padding: 0.2rem;
  text-decoration: none;
  color: rgb(154, 206, 203);
  font-size: 1rem;
  background-color: rgb(0, 0, 0);
}
</style>
