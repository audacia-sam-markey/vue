import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeeTable from "@/views/EmployeeTable.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/employee-table",
      name: "EmployeeTable",
      component: EmployeeTable,
    },
  ],
});

export default router;
