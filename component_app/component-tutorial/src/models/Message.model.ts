export class message {
  user!: string;
  messageContent!: string;

  constructor(user: string, messageContent: string) {
    this.user = user;
    this.messageContent = messageContent;
  }
}
