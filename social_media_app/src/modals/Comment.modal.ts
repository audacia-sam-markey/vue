import { v4 as uuidv4 } from "uuid";
export class Comment {
  id: string = uuidv4();
  content: string;
  userId: string;
  postId: string;
  dateCreated: string = new Date().toString();

  constructor(content: string, userId: string, postId: string) {
    this.content = content;
    this.userId = userId;
    this.postId = postId;
  }
}
