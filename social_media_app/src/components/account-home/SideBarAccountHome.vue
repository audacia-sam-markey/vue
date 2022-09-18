<template>
  <div class="sidebar-account-container">
    <ProfileImg />
    <ProfileDetails />
  </div>
</template>

<script setup lang="ts">
import ProfileImg from "./sidebar-home/ProfileImg.vue";
import ProfileDetails from "./sidebar-home/ProfileDetails.vue";
</script>

<style scoped lang="scss">
.sidebar-account-container {
  position: relative;
  background-color: $foreground;
  grid-row: 1/6;
  grid-column: 1/3;
  gap: 10px;
  box-shadow: -7px 0px 21px rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100%;
  @include flexTemp(column, center, flex-start);
}
</style>
