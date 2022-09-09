import type { IPost } from "@/interfaces/post.interface";
import type { Comment } from "@/models/comment.model";
export class Post implements IPost {
  id: string = crypto.randomUUID();
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
