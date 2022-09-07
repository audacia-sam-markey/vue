import { defineStore } from "pinia";
import { User } from "@/modals/User.modal";
import type { Ref } from "vue";
export const localS: Storage = localStorage;

export const UserStore = defineStore("UserStore", () => {
  let users: User[];

  const usersInLocalStorage: string | null = localS.getItem("users");

  usersInLocalStorage !== null
    ? (users = JSON.parse(usersInLocalStorage))
    : (users = []);

  console.log(users);
  const createANewUser = (userData: {
    username: Ref<string>;
    firstname: Ref<string>;
    lastname: Ref<string>;
    dob: Ref<string>;
    profilePicture: Ref<string>;
    profileBanner: Ref<string>;
  }): void => {
    users.push(
      new User(
        userData.username.value,
        userData.firstname.value,
        userData.lastname.value,
        userData.dob.value,
        userData.profilePicture.value,
        userData.profileBanner.value
      )
    );
    // saving the enw user to db
    localS.setItem("users", JSON.stringify(users));
  };

  return { createANewUser };
});
