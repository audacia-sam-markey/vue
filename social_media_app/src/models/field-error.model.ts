export class FieldError {
  usernameError: string = "";
  firstnameError: string = "";
  lastnameError: string = "";
  passwordError: string = "";
  confirmPasswordError: string = "";
  dobError: string = "";
  profilePictureError: string = "";
  profileBannerError: string = "";

  checkSignupFields(): boolean {
    if (
      this.usernameError === "" &&
      this.firstnameError === "" &&
      this.lastnameError === "" &&
      this.dobError === "" &&
      this.profilePictureError === "" &&
      this.profileBannerError === "" &&
      this.passwordError === "" &&
      this.confirmPasswordError === ""
    ) {
      return true;
    }
    return false;
  }
}
