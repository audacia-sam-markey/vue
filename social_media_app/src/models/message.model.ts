export class message {
  id: string = crypto.randomUUID();
  userId!: string;
  content!: string;
  dateCreated: string = `${new Date().getHours()}:${new Date().getMinutes()}-${
    new Date().getDate
  }/${new Date().getMonth()}/${new Date().getFullYear()}`;

  constructor(userId: string, content: string) {
    this.content = content;
    this.userId = userId;
  }
}
