import { navigatinoStore } from "./../stores/navigationStore";
import PostView from "@/views/PostView.vue";
import ChatView from "@/views/ChatView.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
      name: "signUp",
      component: SignUp,
    },
  ],
});

//reset values
router.beforeEach(() => {
  navigatinoStore().resetAccountOptions();
});

export default router;
