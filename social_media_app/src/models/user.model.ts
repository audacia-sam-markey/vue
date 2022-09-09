import bcrypt from "bcryptjs";

export class User {
  id: string = crypto.randomUUID();
  username: string = "";
  firstname: string = "";
  lastname: string = "";
  passwordHash: string = "";
  dob: string = "";
  profilePicture: string = "";
  profileBanner: string = "";
  dateCreated: string = new Date().toString();

  comparePassword(plaintext: string): boolean {
    return bcrypt.compareSync(plaintext, this.passwordHash);
  }
}
