import { navigatinoStore } from "./../stores/navigationStore";
import PostView from "@/views/PostView.vue";
import ChatView from "@/views/ChatView.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import { Routes } from "@/router/routes";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AccountHome from "@/components/AccountHome.vue";
const routeNames = new Routes();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/post-menu",
      name: "postMenu",
      component: PostView,
    },
    {
      path: "/chat-menu",
      name: "chatMenu",
      component: ChatView,
    },
    {
      path: "/sign-in",
      name: "signIn",
      component: SignIn,
    },
    {
      path: "/sign-up",
      name: routeNames.SignUp,
      component: SignUp,
    },
    {
      path: "/account-home",
      name: "accountHome",
      component: AccountHome,
    },
  ],
});

//reset values
router.beforeEach(() => {
  navigatinoStore().resetAccountOptions();
});

export default router;
