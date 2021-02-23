const { saveEmployee, getEmployee } = require("../../app/Application/Employee");
const EmployeeController = require("./EmployeeController");

const employeeController = new EmployeeController(saveEmployee, getEmployee);

module.exports = { employeeController }