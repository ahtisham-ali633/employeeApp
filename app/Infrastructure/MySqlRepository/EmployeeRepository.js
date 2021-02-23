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

    async updateEmployee(employee) {
        const isEmployeeExists = await Employee.findOne({
            where: {
                employeeId: employee.employeeId
            }
        })

        if(!isEmployeeExists) {
            return false
        }

        return await Employee.update(employee, {
            where: {
                employeeId: employee.employeeId
            }
        })
    }
}

module.exports = EmployeeRepository;