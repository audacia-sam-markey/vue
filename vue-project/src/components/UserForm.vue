<template>
  <div class="form-container">
    <form @submit.prevent="loadData">
      <label for="firstname"> Firstname: </label>
      <input
        v-model="firstname"
        class="text-field"
        type="text"
        name="firstname"
        placeholder="Firstname"
      />
      <label for="lastname"> Lastname </label>
      <input
        v-model="lastname"
        class="text-field"
        type="text"
        name="lastname"
        placeholder="Lastname"
      />

      <label for="username"> Username </label>
      <input
        v-model="username"
        class="text-field"
        type="text"
        name="username"
        placeholder="Username"
      />
      <label for="email">Email</label>
      <input
        v-model="email"
        class="email-field"
        type="email"
        name="email"
        placeholder="Email"
      />

      <label for="dob">Date of Birth</label>
      <input
        v-model="dob"
        class="date-field"
        type="date"
        name="dob"
        placeholder="Date of birth"
      />
      <label for="eye_color">Eye Color</label>
      <select v-model="eyeColor" class="select-field" name="eye_color">
        <option value="brown">brown</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="purple">purple</option>
        <option value="red">red</option>
      </select>
      <label for="address_1">Address line 1</label>
      <input
        v-model="address1"
        class="text-field"
        type="text"
        name="address_1"
        placeholder="address line 1"
      />
      <label for="address_2">Address line 2</label>
      <input
        v-model="address2"
        class="text-field"
        type="text"
        name="address_2"
        placeholder="address line 2"
      />
      <label for="address_3">Address line 3</label>
      <input
        v-model="address3"
        class="text-field"
        type="text"
        name="address_3"
        placeholder="address line 3"
      />
      <label for="city_town">City/Town:</label>
      <input
        v-model="cityTown"
        class="text-field"
        type="text"
        placeholder="City/Town"
      />
      <label for="country">Country</label>
      <input
        v-model="country"
        class="text-field"
        type="text"
        placeholder="Country"
      />
      <label for="postcode">Postcode</label>
      <input
        v-model="postcode"
        class="text-field"
        type="text"
        placeholder="Postcode"
      />
      <label for="phone_number">Phone number:</label>
      <input
        v-model="phoneNumber"
        class="number-field"
        type="number"
        name="phone_number"
        placeholder="phone number"
      />
      <input type="submit" value="Submit" />

      <span v-for="input in formData" :key="input">
        firstname:{{ input.firstname }} lastname:{{
          input.lastname
        }}
        username:{{ input.username }} email:{{ input.email }} dob:{{
          input.dob
        }}
        eyeColor:{{ input.eyeColor }} address1:{{ input.address1 }} address2:{{
          input.address2
        }}
        address3:{{ input.address3 }} cityTown:{{ input.cityTown }} country:{{
          input.country
        }}
        postcode:{{ input.postcode }} phoneNumber:{{ input.phoneNumber }}
      </span>
    </form>
  </div>
</template>

<script lang="ts">
import {  ref, reactive } from "vue";
import type { Ref } from "vue";

export default {
  setup() {
    const firstname: Ref<string> = ref("");
    const lastname: Ref<string> = ref("");
    const username: Ref<string> = ref("");
    const email: Ref<string> = ref("");
    const dob: Ref<string> = ref("");
    const eyeColor: Ref<string> = ref("");
    const address1: Ref<string> = ref("");
    const address2: Ref<string> = ref("");
    const address3: Ref<string> = ref("");
    const cityTown: Ref<string> = ref("");
    const country: Ref<string> = ref("");
    const postcode: Ref<string> = ref("");
    const phoneNumber: Ref<string> = ref("");
    const formData: object[] = reactive([]);

    const loadData = (): void => {
      formData.push({
        firstname,
        lastname,
        username,
        email,
        dob,
        eyeColor,
        address1,
        address2,
        address3,
        cityTown,
        country,
        postcode,
        phoneNumber,
      });
    };

    return {
      firstname,
      lastname,
      username,
      email,
      dob,
      eyeColor,
      address1,
      address2,
      address3,
      cityTown,
      country,
      postcode,
      phoneNumber,
      loadData,
      formData,
    };
  },
};
</script>

<style>
form {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
}
input {
  padding: 0.2rem;
  margin: 0.2rem;
}
</style>
