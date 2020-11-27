import EmployeeController from '../controllers/Employee';

export const types=`
scalar DateTime

type Employee {
    id :ID!,
    name : String,
    email : String,
    created : DateTime,
    updatedAt : DateTime,
    createdBy:Employee,
    UpdatedBy:Employee
    }`;
export const inputs =`
input EmployeeInput {
    title : String
  }
`;
export const queries =`   
Employees: [Employee]
`;

export const mutations= `
createEmployee(input: EmployeeInput): Employee
`
export const roots={
    Employees: EmployeeController.getAllEmployees,
    createEmployee: EmployeeController.create,
}
