<template>
  <div class="message-container">
    <h1>
      {{ props.messageDetails.user }}
    </h1>
    <span>{{ props.messageDetails.messageContent }}</span>
  </div>
</template>

<script setup lang="ts">
import type { message } from "@/models/Message.model";
import type { PropType } from "vue";

const props = defineProps({
  messageDetails: { type: Object as PropType<message>, required: true },
});
</script>

<style scoped lang="scss">
.message-container {
  
  flex-shrink: 0;
  width: 30%;
  background-color: rgb(75, 131, 191);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1,
  span {
    width: 100%;
    text-align: left;
  }
  h1 {
    font-size: 1rem;
    font-style: italic;
  }

  span {
    font-size: 2rem;
  }
}
</style>
