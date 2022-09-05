<template>
  <div>
    <h1>Employee Input Form</h1>
    <AddEmployee/>
  </div>
</template>
<script lang="ts">
import UserForm from "../components/UserForm.vue";
import AddEmployee from "./AddEmployee.vue";

export default {
  components: { UserForm, AddEmployee },

  setup() {

    
  },
};
</script>

<style>
  h1{
    margin: auto;
  }
</style>
