import type { message } from "./message.model";
import type { User } from "./user.model";

export class Chat {
  id: string = crypto.randomUUID();
  userTo!: User;
  messages!: message[];
  dateCreated: string = `${new Date().getHours()}:${new Date().getMinutes()}-${
    new Date().getDate
  }/${new Date().getMonth()}/${new Date().getFullYear()}`;
}
