const AddEmployeeDTO = require("../../app/Application/Employee/SaveEmployee/AddEmployeeDTO");
const UpdateEmployeeDTO = require("../../app/Application/Employee/UpdateEmployee/UpdateEmployeeDTO");
const HttpResp = require('../../app/Application/Utils/HttpResp');

class EmployeeController {

    constructor(saveEmployee, getEmployee, updateEmployee) {
        this.saveEmployee = saveEmployee;
        this.getEmployee = getEmployee;
        this.updateEmployees = updateEmployee;
    }

    async createEmployee(req, res) {
        const {body} = req;
        const addEmployeeDTO = new AddEmployeeDTO(body)
        const httpResponse = await this.saveEmployee.createEmployee(addEmployeeDTO);
        HttpResp.convertToExpress(res, httpResponse);
    }

    async getEmployees(req, res) {
        const httpResponse = await this.getEmployee.getEmployees();
        HttpResp.convertToExpress(res, httpResponse);
    }

    async updateEmployee(req, res) {
        const {body} = req;
        const employeeId = req.params.employeeId;
        const updateEmployeeDTO = new UpdateEmployeeDTO(body);
        const httpResponse = await this.updateEmployees.updateEmployee(updateEmployeeDTO, employeeId);
        HttpResp.convertToExpress(res, httpResponse);
    }
}

module.exports = EmployeeController;