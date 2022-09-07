const usernameValidation: RegExp = /[^A-Za-z0-9._-]/gm;
const nameValidation: RegExp = /[^A-Za-z-]/gm;
const DateValidation: RegExp = /[^0-9-/]/gm;
const UrlValidation: RegExp =
  /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/gm;

export function checkLength(
  inputtedData: string,
  minLength: number,
  maxLength: number
): string {
  console.log(inputtedData.length);

  if (inputtedData.length === 0) {
    return "Data not inputted Please try again!";
  } else if (inputtedData.length > maxLength) {
    return "Input is too long please shorten!";
  } else if (inputtedData.length < minLength) {
    return "Input is too short please lengthen!";
  }
  return "";
}

export function validateUsername(inputtedData: string): string {
  return inputtedData.match(usernameValidation)
    ? "Can only contain letters and numbers!"
    : "";
}
export function validateName(inputtedData: string): string {
  return inputtedData.match(nameValidation) ? "Can only contain a-z . -" : "";
}
export function validateDob(inputtedData: string): string {
 

  if (new Date(inputtedData) > new Date()) {
    return "Date cannot be in the future";
  }

  return inputtedData.match(DateValidation) ? "Can only contain 0-9-" : "";
}
export function validateUrl(inputtedData: string): string {
  return inputtedData.match(UrlValidation)
    ? ""
    : "has to be a valid image web link";
}
