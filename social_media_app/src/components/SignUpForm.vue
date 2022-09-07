<template>
  <form @submit.prevent="addUser">
    <label
      >Username:
      <input
        v-model.trim="username"
        type="text"
        placeholder="Insert Username here..."
      />
      <h4 v-show="usernameError">{{ usernameError }}</h4>
    </label>
    <label
      >Firstname:
      <input
        v-model.trim="firstname"
        type="text"
        placeholder="Insert Firstname here..."
      />
      <h4 v-show="firstnameError">{{ firstnameError }}</h4>
    </label>
    <label
      >Lastname:
      <input
        v-model.trim="lastname"
        type="text"
        placeholder="Insert Lastname here..."
      />
      <h4 v-show="lastnameError">{{ lastnameError }}</h4>
    </label>
    <label
      >Date of Birth:
      <input v-model.trim="dob" type="date" />
      <h4 v-show="dobError">{{ dobError }}</h4>
    </label>
    <label
      >Profile Picture Image Link:
      <input
        v-model.trim="profilePicture"
        type="url"
        placeholder="Insert Profile Picture Link here..."
      />
      <h4 v-show="profilePictureError">{{ profilePictureError }}</h4>
    </label>
    <label
      >Profile Banner Image Link:
      <input
        v-model.trim="profileBanner"
        type="url"
        placeholder="Insert Profile Banner Link here..."
      />
      <h4 v-show="profileBannerError">{{ profileBannerError }}</h4>
    </label>
    <input type="submit" value="Create Account" />
  </form>
</template>

<script setup lang="ts">
import {
  checkLength,
  validateUsername,
  validateName,
  validateDob,
  validateUrl,
} from "@/composables/validateInputs";
import { UserStore } from "@/stores/UserStore";
import { ref, type Ref } from "vue";
import { AlertStore } from "@/stores/AlertStore";
const userStore = UserStore();

const alertStore = AlertStore();
const username: Ref<string> = ref("");
const firstname: Ref<string> = ref("");
const lastname: Ref<string> = ref("");
const dob: Ref<string> = ref("");
const profilePicture: Ref<string> = ref("");
const profileBanner: Ref<string> = ref("");
const usernameError: Ref<string> = ref("");
const firstnameError: Ref<string> = ref("");
const lastnameError: Ref<string> = ref("");
const dobError: Ref<string> = ref("");
const profilePictureError: Ref<string> = ref("");
const profileBannerError: Ref<string> = ref("");

const addUser = (): void => {
  // checking the length is valid
  usernameError.value = checkLength(username.value, 8, 20);
  firstnameError.value = checkLength(firstname.value, 1, 60);
  lastnameError.value = checkLength(lastname.value, 2, 100);
  dobError.value = checkLength(dob.value, 9, 10);
  profilePictureError.value = checkLength(profilePicture.value, 10, 2048);
  profileBannerError.value = checkLength(profileBanner.value, 10, 2048);
  //checking the inputs are valid
  if (
    usernameError.value === "" &&
    firstnameError.value === "" &&
    lastnameError.value === "" &&
    dobError.value === "" &&
    profilePictureError.value === "" &&
    profileBannerError.value === ""
  ) {
    usernameError.value = validateUsername(username.value);
    firstnameError.value = validateName(firstname.value);
    lastnameError.value = validateName(lastname.value);
    dobError.value = validateDob(dob.value);
    profilePictureError.value = validateUrl(profilePicture.value);
    profileBannerError.value = validateUrl(profileBanner.value);

    if (
      usernameError.value === "" &&
      firstnameError.value === "" &&
      lastnameError.value === "" &&
      dobError.value === "" &&
      profilePictureError.value === "" &&
      profileBannerError.value === ""
    ) {
      userStore.createANewUser({
        username,
        firstname,
        lastname,
        dob,
        profilePicture,
        profileBanner,
      });

      alertStore.toggleAlert();
    }
  }
};
</script>

<style lang="scss" scoped>
h4 {
  margin-top: 0.5rem;
  border-radius: $rounded;
  padding: 0.3rem;
  background-color: $highlight;
  color: $foreground;
}
</style>
