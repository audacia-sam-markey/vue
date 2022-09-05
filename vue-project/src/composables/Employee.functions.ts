import { Employee } from "@/modals/Employee.modal";
import { ref, type Ref } from "vue";

export const addEmployee = (
  firstname: string,
  lastname: string,
  dob: string,
  startDate: string,
  role: string,
  salary: string
) => {
  const employees: Ref<Employee[]> = loadEmployees();

  const newEmployee = new Employee(
    firstname,
    lastname,
    dob,
    startDate,
    role,
    salary
  );
  employees.value.push(newEmployee);
  localStorage.setItem("employeeData", JSON.stringify(employees.value));
};

export const loadEmployees = (): Ref<Employee[]> => {
  // TODO Add functionality so the table only loads 5 users at a time and have page numbers so the user can navigate to each page
  const data: string | null = localStorage.getItem("employeeData");

  const employeeArray: Ref<Employee[]> =
    data !== null ? ref(Array.from(JSON.parse(data))) : ref([]);
  return employeeArray;
};
