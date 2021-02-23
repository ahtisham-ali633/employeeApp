const SaveEmployee = require("./SaveEmployee/SaveEmployee");
const GetEmployee = require("./GetEmployee/GetEmployee");

const EmployeeRepository = require("../../Infrastructure/MySqlRepository/EmployeeRepository");

const employeeRepository = new EmployeeRepository();


const saveEmployee =  new SaveEmployee(employeeRepository);
const getEmployee = new GetEmployee(employeeRepository);

module.exports = { saveEmployee, getEmployee }