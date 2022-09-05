<template>
  <tr
    v-for="employee in employees"
    :key="employee.id"
  >
    <td>{{ employee.firstname }}</td>
    <td>{{ employee.lastname }}</td>
    <td>{{ employee.dob }}</td>
    <td>{{ employee.startDob }}</td>
    <td>{{ employee.role }}</td>
    <td>£{{ employee.salary }}</td>
  </tr>
</template>

<script lang="ts">
import type { Employee } from "@/modals/Employee.modal";
import type { PropType, Ref } from "vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    employees: {
      required: true,
      type: Array as PropType<Employee[]>,
    },
  },

});
</script>

<style></style>
