export class Comment {
  id: string = crypto.randomUUID();
  content: string;
  userId: string;
  postId: string;
  dateCreated: string = `${new Date().getHours()}:${new Date().getMinutes()}-${
    new Date().getDate
  }/${new Date().getMonth()}/${new Date().getFullYear()}`;

  constructor(content: string, userId: string, postId: string) {
    this.content = content;
    this.userId = userId;
    this.postId = postId;
  }
}
