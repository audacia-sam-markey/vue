<template>
  <div class="container">
    <TitleHeading header="Post Menu" />
    <PostMenuOption name="create-post" value="Create Post" />
    <PostMenuOption name="post-timeline" value="Post TimeLine" />
  </div>
</template>

<script setup lang="ts">
import TitleHeading from "../components/TitleHeading.vue";
import PostMenuOption from "../components/post-menu/PostMenuOption.vue";
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  gap: 50px;
  @include flexTemp(column, center, center);
}
</style>
