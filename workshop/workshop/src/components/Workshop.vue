<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import type { Ref } from "vue";

export default defineComponent({
  props: {
    msg: { type: String, required: true },
  },
  setup() {
    const firstname: Ref<string> = ref("sam");
    const lastname: Ref<string> = ref("markey");
    const names: Ref<{ name: string; isRed: boolean }[]> = ref([
      { name: "sam", isRed: false },
      { name: "john", isRed: false },
      { name: "sally", isRed: false },
    ]);

    const fullname = computed((): string => {
      return `${firstname.value} ${lastname.value}`;
    });
    const changeString = ref("Click to change!");

    const changeMe = () => {
      changeString.value = "you changed!!";
    };
    const changeToRed = (name: { name: string; isRed: boolean }): void => {
      name.isRed = true;
    };

    return {
      firstname,
      fullname,
      changeMe,
      changeString,
      names,
      changeToRed,
    };
  },
});
</script>

<template>
  <div class="tasks">
    <div class="task-1">
      hello my firstname is {{ firstname }}
      <!-- 1. Display below this comment the string "Hello my name is {{ firstName }} {{ lastName }}" -->
    </div>

    <div class="task-2">
      {{ fullname }}
      <!-- 2. Display the same string using a computed property -->
    </div>

    <div class="task-3">
      <!-- 3. Display any string inside an element, when clicked change the string to something else  -->
      <div @click="changeMe">{{ changeString }}</div>
    </div>

    <div class="task-3">
      <span
        @click="changeToRed(name)"
        v-for="(name, index) in names"
        :class="{ red: name.isRed }"
        :key="index"
        ><br />
        {{ name.name }}</span
      >
      <!-- 4. Loop through an array using v-for, when an item is clicked, change the colour of the text to red e.g {'color': 'red'}  -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}

.red {
    color:red;
}
</style>
