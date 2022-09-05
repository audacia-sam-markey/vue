import { v4 as uuidv4 } from 'uuid';
export class Employee {
  firstname: string;
  lastname: string;
  dob: string;
  startDob: string;
  role: string;
  salary: string;
  id:string = uuidv4();

  constructor(
    firstname: string,
    lastname: string,
    dob: string,
    startDob: string,
    role: string,
    salary: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.startDob = startDob;
    this.role = role;
    this.salary = salary;
  }


}
