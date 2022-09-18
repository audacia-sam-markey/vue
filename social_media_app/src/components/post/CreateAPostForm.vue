<template>
  <form @submit.prevent="addPostToAccount">
    <label
      >Post Title:
      <input
        v-model="title"
        type="text"
        placeholder="insert post Title Here..."
      />
    </label>
    <label
      >Post Content:
      <textarea
        v-model="content"
        rows="5"
        placeholder="insert content here..."
      />
    </label>
    <label
      >Post Image Link:
      <input
        v-model="imgUrl"
        type="url"
        placeholder="insert post image link Here..."
      />
    </label>

    <input type="submit" value="Create Post" />
  </form>
</template>

<script setup lang="ts">
import { Post } from "@/models/post.model";
import { UserStore } from "@/stores/user.store";
import { type Ref, ref } from "vue";
const imgUrl: Ref<string> = ref("");
const title: Ref<string> = ref("");
const content: Ref<string> = ref("");

function addPostToAccount() {
  const userStore = UserStore();
  userStore.currentUser?.addPost(
    new Post(title.value, content.value, imgUrl.value, userStore.currentUser.id)
  );
  userStore.addNewPostToUsers();
  // Do this tomorrow so post is added to the users account
}
</script>

<style scoped></style>
