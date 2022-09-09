import { User } from "@/models/user.model";
import { defineStore } from "pinia";
import bcrypt from "bcryptjs";
import { ref, type Ref } from "vue";
export const localS: Storage = localStorage;
export let users: User[];
const usersInLocalStorage: string | null = localS.getItem("users");

usersInLocalStorage !== null
  ? (users = JSON.parse(usersInLocalStorage))
  : (users = []);
export const UserStore = defineStore("UserStore", {
  state: () => ({
    isUserLoggedIn: ref(
      Boolean(localS.getItem("isUserLoggedIn")) || (ref(false) as Ref<boolean>)
    ),
    currentUser: undefined as undefined | User,
  }),
  actions: {
    toggleisUserLoggedIn(): void {
      // FIX LOGGING OUT ISSUE TOGGLING NOT WORKING AS MUCH
      this.isUserLoggedIn = !this.isUserLoggedIn;
      console.log("setting localstorage to log user out");

      localS.setItem("isUserLoggedIn", (!this.isUserLoggedIn).toString());
    },
    changeCurrentUser(username: string): void {
      this.currentUser = new User();
      const cUser: User | undefined = this.getUserDetails(username);
      if (cUser !== undefined) {
        this.currentUser.firstname = cUser.firstname;
        this.currentUser.lastname = cUser.lastname;
        this.currentUser.id = cUser.id;
        this.currentUser.username = cUser.username;
        this.currentUser.passwordHash = cUser.passwordHash;
        this.currentUser.dob = cUser.dob;
        this.currentUser.profilePicture = cUser.profilePicture;
        this.currentUser.profileBanner = cUser.profileBanner;
        this.currentUser.dateCreated = cUser.dateCreated;
        localS.setItem("username", this.currentUser.username);
      }

      console.log(this.currentUser);
    },
    createANewUser(newUser: User): void {
      // saving the enw user to db

      users.push(newUser);

      localS.setItem("users", JSON.stringify(users));
    },
    hashPassword(plainText: string): string {
      const hashedPassword = bcrypt.hashSync(plainText, 10);
      return hashedPassword;
    },
    getUserDetails(username: string): User | undefined {
      return users.find((user) => user.username === username);
    },
  },
  getters: {},
});
