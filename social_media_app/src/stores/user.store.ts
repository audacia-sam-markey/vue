import { User } from "@/models/user.model";
import { defineStore } from "pinia";
import bcrypt from "bcryptjs";
import { ref } from "vue";

export const localS: Storage = localStorage;
export let users: User[];

const usersInLocalStorage: string | null = localS.getItem("users");

usersInLocalStorage !== null
  ? (users = JSON.parse(usersInLocalStorage))
  : (users = []);

export const UserStore = defineStore("UserStore", {
  state: () => ({
    isUserLoggedIn: ref(localS.getItem("isUserLoggedIn") === "true"),
    currentUser: null as null | User,
  }),
  actions: {
    toggleisUserLoggedIn(): void {
      this.isUserLoggedIn = !this.isUserLoggedIn;
      console.log("setting localstorage to log user out", this.isUserLoggedIn);

      localS.setItem("isUserLoggedIn", this.isUserLoggedIn.toString());
    },
    logUserOut(): void {
      this.currentUser = null;
      localS.removeItem("username");
    },
    changeCurrentUser(username: string): void {
      const cUser: User | undefined = this.getUserDetails(username);

      // because it was stored in JSON it bneeds to be converted to a class to use its full functionality
      if (cUser !== undefined) {
        this.currentUser = new User();
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
      console.log(username);

      console.log(users.find((user) => user.username === username));
      return users.find((user) => user.username === username);
    },
    addNewPostToUsers() {
      users.find((user) => {
        if (user.username === this.currentUser?.username) {
          user.posts = this.currentUser.posts;
          console.log(user.posts);
        }
      });
      localS.setItem("users", JSON.stringify(users));
    },
  },
  getters: {},
});
