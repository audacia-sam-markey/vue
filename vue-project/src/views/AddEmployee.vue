<template>
  <form @submit.prevent="submitEmployeeData">
    <label>Firstname</label>
    <input v-model="firstname" type="text" />
    <label>Lastname:</label>
    <input v-model="lastname" type="text" />
    <label>Date of Birth:</label>
    <input v-model="dob" type="date" />
    <label>Start date:</label>
    <input v-model="startDate" type="date" />
    <label>Role:</label>
    <input v-model="role" type="text" />
    <label>Salary:</label>
    <input v-model="salary" type="text" />

    <input type="submit" value="Add Employee" />
  </form>
</template>

<script lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { addEmployee } from "@/composables/Employee.functions";
export default {
  setup() {
    const firstname: Ref<string> = ref("");
    const lastname: Ref<string> = ref("");
    const dob: Ref<string> = ref("");
    const startDate: Ref<string> = ref("");
    const role: Ref<string> = ref("");
    const salary: Ref<string> = ref("");

    const submitEmployeeData = ():void => {
      addEmployee(
        firstname.value,
        lastname.value,
        dob.value,
        startDate.value,
        role.value,
        salary.value
      );
    };

    return {
      firstname,
      lastname,
      dob,
      startDate,
      role,
      salary,
      submitEmployeeData,
    };
  },
};
</script>

<style></style>
