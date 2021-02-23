const SaveEmployee = require("./SaveEmployee/SaveEmployee");
const GetEmployee = require("./GetEmployee/GetEmployee");
const UpdateEmployee = require("./UpdateEmployee/UpdateEmployee");

const EmployeeRepository = require("../../Infrastructure/MySqlRepository/EmployeeRepository");

const employeeRepository = new EmployeeRepository();


const saveEmployee =  new SaveEmployee(employeeRepository);
const getEmployee = new GetEmployee(employeeRepository);
const updateEmployee = new UpdateEmployee(employeeRepository);


module.exports = { saveEmployee, getEmployee, updateEmployee }