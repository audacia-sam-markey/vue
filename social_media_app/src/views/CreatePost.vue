<template>
  <div>
    <AlertModal/>
    <TitleHeading header="Create a post" />
    <CreateAPostForm />
  </div>
</template>

<script setup lang="ts">
import TitleHeading from "../components/TitleHeading.vue";
import CreateAPostForm from "../components/post/CreateAPostForm.vue";
import AlertModal from "../components/AlertModal.vue";
</script>

<style scoped></style>
