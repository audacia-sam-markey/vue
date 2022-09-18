import type { IPost } from "@/interfaces/post.interface";
import type { Comment } from "@/models/comment.model";
import type { Like } from "./like.model";
export class Post implements IPost {
  id: string = crypto.randomUUID();
  comments: Comment[] = [];
  likes: Like[] = [];
  title: string;
  content: string;
  imgLink: string;
  userId: string;
  dateCreated: string = `${new Date().getHours()}:${new Date().getMinutes()}-${
    new Date().getDate
  }/${new Date().getMonth()}/${new Date().getFullYear()}`;

  constructor(title: string, content: string, imgLink: string, userId: string) {
    this.title = title;
    this.content = content;
    this.imgLink = imgLink;
    this.userId = userId;
  }
}
