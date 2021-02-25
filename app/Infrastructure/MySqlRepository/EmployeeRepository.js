const db = require('../Database/Models');
const {Employee} = db;
const EmployeeEntity = require("../../Domain/Entites/EmployeeEntity");
const BaseEmployee = require("../../Domain/Employee/BaseEmployee");

class EmployeeRepository extends BaseEmployee{
    async createEmployee(employee) {
        return Employee.create(employee);

    }

    async fetchAllEmployees() {
        const employees = await Employee.findAll();

        if(employees.length > 0) {
            return employees.map(employee => EmployeeEntity.create(employee, employee))
        }
    }

    async updateEmployee(employee, employeeId) {
        const isEmployeeExists = await Employee.findOne({
            where: {
                employeeId: employeeId
            }
        })

        if(!isEmployeeExists) {
            return false
        }

        return await Employee.update(employee, {
            where: {
                employeeId: employeeId
            }
        })
    }
}

module.exports = EmployeeRepository;