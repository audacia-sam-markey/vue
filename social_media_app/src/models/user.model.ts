import bcrypt from "bcryptjs";
import type { Post } from "./post.model";

export class User {
  id: string = crypto.randomUUID();
  username: string = "";
  firstname: string = "";
  lastname: string = "";
  passwordHash: string = "";
  dob: string = "";
  profilePicture: string = "";
  profileBanner: string = "";
  dateCreated: string = new Date().toString();
  posts: Post[] = [];
  friendsIds: string[] = [];

  addPost(post: Post) {
    this.posts.push(post);
  }

  comparePassword(plaintext: string): boolean {
    return bcrypt.compareSync(plaintext, this.passwordHash);
  }
}
