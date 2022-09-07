import { v4 as uuidv4 } from "uuid";
export class User {
  id: string = uuidv4();
  username: string;
  firstname: string;
  lastname: string;
  dob: string;
  profile_picture: string;
  profile_banner: string;
  dateCreated: string = new Date().toString();

  constructor(
    username: string,
    firstname: string,
    lastname: string,
    dob: string,
    profile_picture: string,
    profile_banner: string
  ) {
    this.username = username;
    this.firstname = firstname;
    this.dob = dob;
    this.profile_picture = profile_picture;
    this.profile_banner = profile_banner;
    this.lastname = lastname;
  }
}
