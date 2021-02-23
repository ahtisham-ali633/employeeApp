const { saveEmployee, getEmployee, updateEmployee } = require("../../app/Application/Employee");
const EmployeeController = require("./EmployeeController");

const employeeController = new EmployeeController(saveEmployee, getEmployee, updateEmployee);

module.exports = { employeeController }