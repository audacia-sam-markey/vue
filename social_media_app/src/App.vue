<template>
  <Nav id="nav" />
  <RouterView :id="[!showSidebar ? 'content' : 'content-no-sidebar']" />
  <Sidebar v-if="!showSidebar" id="sidebar" />
</template>

<script setup lang="ts">
import Nav from "@/components/NavBar.vue";
import Sidebar from "@/components/SideBar.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { localS, UserStore } from "./stores/user.store";

const usernameInStorage: string | null = localS.getItem("username");
if (usernameInStorage) {
  const userStore = UserStore();

  userStore.changeCurrentUser(usernameInStorage);
}
const router = useRouter();

const showSidebar = computed(
  () =>
    router.currentRoute.value.name === "signUp" ||
    router.currentRoute.value.name === "signIn"
);

{
  Nav;
}
</script>

<style lang="scss">
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
  color: $background;
}
a::after {
  content: "";
  transition: all 0.1s ease-in-out;
  position: absolute;
  bottom: -2%;
  left: 0;
  height: 1.5px;
  width: 0px;
  background: $background;
}
a:hover::after {
  width: 100%;
}

body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}

#app {
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(20, 1fr);
}
#nav {
  grid-row: 1;
  grid-column: 1/-1;
}
#sidebar {
  grid-row: 2/-1;

  background-color: $highlight;
  grid-column: 9/-1;
}

#content,
#content-no-sidebar {
  overflow-y: auto;
  overflow-x: hidden;

  grid-row: 2/-1;
  grid-column: 3/9;
  @include flexTemp(column, center, flex-start);
}

#content-no-sidebar {
  grid-column: 1/-1;
}
form {
  margin-top: 2rem;
  width: 60%;
  @include flexTemp(column, center, center);
  gap: 15px;
}

input[type="submit"] {
  cursor: pointer;
  width: 40%;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: $rounded;

  border: none;
  color: $foreground;
  background-color: $background;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    -webkit-box-shadow: 8px 8px 0px 0px$highlight;
    box-shadow: 8px 8px 0px 0px $highlight;
  }
}
label,
textarea,
input {
  font-size: 1rem;
  width: 80%;
}

label {
  @include flexTemp(column, center, center);
}

input,
textarea {
  border: $background 2px solid;
  border-radius: $rounded;
  padding: 0.5rem;
}

textarea {
  resize: vertical;
}
</style>
