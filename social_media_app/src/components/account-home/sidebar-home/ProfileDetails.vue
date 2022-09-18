<template>
  <div class="profile-detail-container">
    <span>Username:{{ currentUser.username }}</span>
    <span>Name:{{ `${currentUser.firstname} ${currentUser.lastname}` }}</span>
    <span
      >Date of Birth:{{ currentUserDob.getDate() }}/{{
        currentUserDob.getMonth()
      }}/{{ currentUserDob.getFullYear() }}</span
    >
    <span>Password: ***********</span>
  </div>
</template>

<script setup lang="ts">
import { User } from "@/models/user.model";
import { UserStore } from "@/stores/user.store";

const user: User | null = UserStore().currentUser;

const currentUser: User = user !== null ? user : new User();
const currentUserDob: Date = new Date(currentUser.dob);
</script>

<style scoped lang="scss">
.profile-detail-container {
  gap: 20px;
  @include flexTemp(column, flex-start, center);
}
</style>
