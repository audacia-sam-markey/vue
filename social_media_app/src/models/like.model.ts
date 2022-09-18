export class Like {
  userId!: String;
  dateCreated: string = `${new Date().getHours()}:${new Date().getMinutes()}-${
    new Date().getDate
  }/${new Date().getMonth()}/${new Date().getFullYear()}`;
}
