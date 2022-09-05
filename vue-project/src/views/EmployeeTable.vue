<template>
  <body>
    <table>
      <legend>Employees Table</legend>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Date of birth</th>
        <th>Start date</th>
        <th>Role</th>
        <th>Salary</th>
      </tr>
      <EmployeeRows :employees="currentEmployeeView" />
    </table>

    <div class="pages">
      Pages:
      <button
        @click="changeEmployeeView(employeeSection)"
        v-for="(employeeSection, index) in splitEmployees"
        :key="index"
      >
        {{ index +1}}
      </button>
    </div>
  </body>
</template>

<script lang="ts">
import type { Employee } from "@/modals/Employee.modal";
import { ref, defineComponent } from "vue";
import type { Ref } from "vue";

import { loadEmployees } from "@/composables/Employee.functions";
ref;
import EmployeeRows from "../components/EmployeeRows.vue";

export default defineComponent({
  setup(props) {
    const employees: Ref<Employee[]> = loadEmployees();

    const splitEmployees: Ref<any[]> = ref([]);

    while (employees.value.length > 0) {
      splitEmployees.value.push(employees.value.splice(0, 5));
    }

    const currentEmployeeView: Ref<Employee[]> = ref(splitEmployees.value[0]);

    const changeEmployeeView = (newSection: Employee[]) => {
      // TODO NOT UPDATING ON CHILD COMPONENT

      currentEmployeeView.value = newSection;
      console.log(currentEmployeeView.value);
    };

    return {
      employees,
      splitEmployees,
      currentEmployeeView,
      changeEmployeeView,
    };
  },
  components: { EmployeeRows },
});
</script>

<style>
legend {
  font-size: 2rem;
  text-decoration: underline;
}
table {
  margin: auto;
  width: 80%;
  margin-top: 3rem;
}
th,
td,
table {
  border: 1px solid;
}

th {
  font-style: bold;
  font-size: 1.5rem;
}

td,
th {
  padding: 0.3rem;
}

footer {
  font-size: 3rem;
}

.pages {
  margin: auto;
  padding: 1rem;
}

.pages button {
  margin: 0.2rem;
  padding: 0.5rem;
}
</style>
