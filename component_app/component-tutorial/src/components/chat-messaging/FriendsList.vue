<template>
  <div class="friend-list-container">
    Friends List:
    <FriendVue
      v-for="friend in friends"
      :key="friend.name"
      :friendDetails="friend"
      @loadNewMessages="loadSpinner"
    />
  </div>
</template>

<script setup lang="ts">
import { Friend } from "@/models/Friend.model";
import FriendVue from "./FriendVue.vue";
const emit = defineEmits(["loadSpinner"]);
const friends: Friend[] = [
  new Friend(
    "sam markey",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "John Smith",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Angelina Burns",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Alexis Perry",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Bradford Wilson",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Johnson Ramirez",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Carla-Parker Bailey",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Kip Daniels",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
  new Friend(
    "Clark Kent",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.westhighlandpeninsulas.com%2Fsite%2Fassets%2Ffiles%2F1507%2Fshutterstock_347830796website_1-1.webp&f=1&nofb=1"
  ),
];

function loadSpinner() {
  emit("loadSpinner");
}
</script>

<style lang="scss" scoped>
.friend-list-container {
  margin-top: 1rem;
  overflow-y: scroll;
  padding: 1rem;
  height: 100%;
  background-color: rgb(240, 240, 240);
  width: 20%;
  display: flex;
  max-height: 86vh;
  flex-direction: column;
  gap: 3px;
}
</style>
