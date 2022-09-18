import { AlertStore } from "./../stores/alert.store";
import { UserStore } from "./../stores/user.store";
import { navStore } from "../stores/navigation.store";
import ChatView from "@/views/ChatView.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import { Routes } from "@/router/routes";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AccountHome from "@/components/account-home/AccountHome.vue";
import PostTimelineVue from "@/views/PostTimeline.vue";
import PostMenuVue from "@/views/PostMenu.vue";
import createPostVue from "@/views/CreatePost.vue";
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
      component: PostMenuVue,
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
    {
      path: "/create-post",
      name: routeNames.createPost,
      component: createPostVue,
    },
    {
      path: "/post-timeline",
      name: routeNames.postTimeLine,
      component: PostTimelineVue,
    },
  ],
});

//reset values
router.beforeEach(() => {
  navStore().resetAccountOptions();
});

router.afterEach(() => {
  console.log(router.currentRoute.value.name, UserStore().$state.currentUser);

  // check if the user is logged in on certain routes so they have access!
  if (router.currentRoute.value.name === "postMenu") {
    if (UserStore().$state.currentUser === null) {
      router.push({ name: "home" });
      const alert = AlertStore();

      alert.changeAlertMessage("Please login to access post");
      alert.toggleAlert();
    }
  }
});

export default router;
