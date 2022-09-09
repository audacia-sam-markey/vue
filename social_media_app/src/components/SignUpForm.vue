<template>
  <form @submit.prevent="addUser">
    <label
      >Username:
      <input
        v-model.trim="newUser.username"
        type="text"
        placeholder="Insert Username here..."
      />
      <h4 class="error" v-show="newInputError.usernameError">
        {{ newInputError.usernameError }}
      </h4>
    </label>
    <label
      >Firstname:
      <input
        v-model.trim="newUser.firstname"
        type="text"
        placeholder="Insert Firstname here..."
      />
      <h4 class="error" v-show="newInputError.firstnameError">
        {{ newInputError.firstnameError }}
      </h4>
    </label>
    <label
      >Lastname:
      <input
        v-model.trim="newUser.lastname"
        type="text"
        placeholder="Insert Lastname here..."
      />
      <h4 class="error" v-show="newInputError.lastnameError">
        {{ newInputError.lastnameError }}
      </h4>
    </label>
    <label
      >Password:
      <input
        v-model.trim="password"
        type="password"
        placeholder="Insert Password here..."
      />
      <h4 class="error" v-show="newInputError.passwordError">
        {{ newInputError.passwordError }}
      </h4>
    </label>
    <label
      >Confirm Password:
      <input
        v-model.trim="confirmPassword"
        type="password"
        placeholder="Insert Password here..."
      />
      <h4 class="error" v-show="newInputError.confirmPasswordError">
        {{ newInputError.confirmPasswordError }}
      </h4>
    </label>
    <label
      >Date of Birth:
      <input v-model.trim="newUser.dob" type="date" />
      <h4 class="error" v-show="newInputError.dobError">
        {{ newInputError.dobError }}
      </h4>
    </label>
    <label
      >Profile Picture Image Link:
      <input
        v-model.trim="newUser.profilePicture"
        type="url"
        placeholder="Insert Profile Picture Link here..."
      />
      <h4 class="error" v-show="newInputError.profilePictureError">
        {{ newInputError.profilePictureError }}
      </h4>
    </label>
    <label
      >Profile Banner Image Link:
      <input
        v-model.trim="newUser.profileBanner"
        type="url"
        placeholder="Insert Profile Banner Link here..."
      />
      <h4 class="error" v-show="newInputError.profileBannerError">
        {{ newInputError.profileBannerError }}
      </h4>
    </label>
    <input type="submit" value="Create Account" />
  </form>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/user.store";
import { ref, type Ref } from "vue";
import { User } from "@/models/user.model";
import { FieldError } from "@/models/field-error.model";
import {
  checkLength,
  validateUsername,
  validateName,
  validatePassword,
  validateDob,
  validateUrl,
} from "@/composables/validate-inputs.composable";
import { AlertStore } from "@/stores/alert.store";

const userStore = UserStore();
const alertStore = AlertStore();
const newUser: Ref<User> = ref(new User());
const newInputError: Ref<FieldError> = ref(new FieldError());
const password: Ref<string> = ref("");
const confirmPassword: Ref<string> = ref("");

function addUser(): void {
  //check if username exists on the database
  if (userStore.getUserDetails(newUser.value.username) === undefined) {
    newInputError.value.usernameError = "";
    // checking the length is valid
    newInputError.value.usernameError = checkLength(
      newUser.value.username,
      8,
      20
    );
    newInputError.value.firstnameError = checkLength(
      newUser.value.firstname,
      1,
      60
    );
    newInputError.value.lastnameError = checkLength(
      newUser.value.lastname,
      2,
      100
    );
    console.log(password.value);

    newInputError.value.passwordError = checkLength(password.value, 8, 64);
    newInputError.value.dobError = checkLength(newUser.value.dob, 9, 10);
    newInputError.value.profilePictureError = checkLength(
      newUser.value.profilePicture,
      10,
      2048
    );
    newInputError.value.profileBannerError = checkLength(
      newUser.value.profileBanner,
      10,
      2048
    );
    //checking the inputs are valid
    if (newInputError.value.checkSignupFields()) {
      newInputError.value.usernameError = validateUsername(
        newUser.value.username
      );
      newInputError.value.firstnameError = validateName(
        newUser.value.firstname
      );
      newInputError.value.lastnameError = validateName(newUser.value.lastname);
      newInputError.value.passwordError = validatePassword(
        password.value,
        confirmPassword.value,
        newUser.value.firstname + newUser.value.lastname
      );
      newInputError.value.dobError = validateDob(newUser.value.dob);
      newInputError.value.profilePictureError = validateUrl(
        newUser.value.profilePicture
      );
      newInputError.value.profileBannerError = validateUrl(
        newUser.value.profileBanner
      );

      if (newInputError.value.checkSignupFields()) {
        const passwordHash: string = userStore.hashPassword(password.value);

        newUser.value.passwordHash = passwordHash;

        userStore.createANewUser(newUser.value);
        alertStore.changeAlertMessage("Account created successfully");
        alertStore.toggleAlert();
      }
    }
  } else {
    newInputError.value.usernameError =
      "Username already exists please use another!";
  }
}
</script>

<style lang="scss">
.error {
  margin-top: 0.5rem;
  border-radius: $rounded;
  padding: 0.3rem;
  background-color: $error;
  color: $foreground;
}

input[type="submit"] {
  margin-bottom: 2rem;
}
</style>
