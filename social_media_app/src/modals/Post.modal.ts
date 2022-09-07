import { v4 as uuidv4 } from "uuid";
import type { IPost } from "@/interfaces/ipost.interface";
import type { Comment } from "@/modals/Comment.modal";
export class Post implements IPost {
  id: string = uuidv4();
  comments: Comment[] = [];
  title: string;
  content: string;
  imgLink: string;
  userId: string;
  dateCreated: string = new Date().toString();

  constructor(title: string, content: string, imgLink: string, userId: string) {
    this.title = title;
    this.content = content;
    this.imgLink = imgLink;
    this.userId = userId;
  }
}
