<template>
  <form @submit.prevent="signInUser">
    <label>Username:</label>
    <input type="text" placeholder="Username" v-model.trim="username" />

    <label>Password:</label>
    <input type="password" placeholder="Password" v-model.trim="password" />

    <input type="submit" value="Sign in" />
  </form>
  <h4 class="error" v-show="newInputError.usernameError">
    {{ newInputError.usernameError }}
  </h4>
</template>

<script setup lang="ts">
import { FieldError } from "@/models/field-error.model";
import type { User } from "@/models/user.model";
import router from "@/router";
import { AlertStore } from "@/stores/alert.store";
import { UserStore } from "@/stores/user.store";
import { type Ref, ref } from "vue";
const userStore = UserStore();
const password: Ref<string> = ref("");
const username: Ref<string> = ref("");
const newInputError: Ref<FieldError> = ref(new FieldError());
const alertStore = AlertStore();
const usernamePasswordNotMatch: string =
  "Username or password does not match please try again...";
function signInUser() {
  userStore.changeCurrentUser(username.value);
  if (username.value.length <= 0) {
    newInputError.value.usernameError = "Please enter a valid username";
  } else if (password.value.length <= 0) {
    newInputError.value.usernameError = " Please enter a valid password";
  } else if (userStore.$state.currentUser === undefined) {
    console.log(userStore.$state.currentUser);

    newInputError.value.usernameError = usernamePasswordNotMatch;
  } else {
    //

    const currentLoggedInUser: User = userStore.$state.currentUser;

    if (currentLoggedInUser.comparePassword(password.value)) {
      userStore.toggleisUserLoggedIn();
      router.push({ name: "home" });
      alertStore.changeAlertMessage(
        `Welcome ${userStore.$state.currentUser.username}`
      );
      alertStore.toggleAlert();
    } else {
      newInputError.value.usernameError = usernamePasswordNotMatch;
    }
  }
}
</script>

<style scoped lang="scss"></style>
