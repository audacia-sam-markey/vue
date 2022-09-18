<template>
  <div class="account-home-container">
    <SideBarAccountHome />
    <div class="scrollable">
      <BannerImage />
      <WelcomeAccountHomeHeader />

      <PostContainer />
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerImage from "./BannerImage.vue";
import SideBarAccountHome from "./SideBarAccountHome.vue";
import WelcomeAccountHomeHeader from "./sidebar-home/WelcomeAccountHomeHeader.vue";
import PostContainer from "../post/PostContainer.vue";
</script>

<style scoped lang="scss">
#content {
  grid-column: 1/9;
  display: grid;
}
.account-home-container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
}

.scrollable {
  overflow-y: auto;
  grid-column: 3/-1;
  grid-row: 1/6;
  width: 100%;
  height: 100%;
  @include flexTemp(column, center, flex-start);
  flex-shrink: 0;
}
</style>
