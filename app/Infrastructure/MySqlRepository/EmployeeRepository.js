const db = require('../Database/Models');
const {Employee} = db;
const EmployeeEntity = require("../../Domain/Entites/EmployeeEntity");

class EmployeeRepository {
    async createEmployee(employee) {
        return Employee.create(employee);

    }

    async fetchAllEmployees() {
        const employees = await Employee.findAll();

        if(employees.length > 0) {
            return employees.map(employee => EmployeeEntity.createFromObject(employee));
        }
    }
}

module.exports = EmployeeRepository;