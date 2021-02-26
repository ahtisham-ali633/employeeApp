const { saveEmployee, getEmployee, updateEmployee } = require("../../app/Application/Employee");
const { adminLogin } = require("../../app/Application/Auth");

const EmployeeController = require("./EmployeeController");
const AdminController = require("./AdminController");




const employeeController = new EmployeeController(saveEmployee, getEmployee, updateEmployee);
const adminController = new AdminController(adminLogin);

module.exports = { employeeController, adminController }