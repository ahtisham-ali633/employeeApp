const AddEmployeeDTO = require("../../app/Application/Employee/SaveEmployee/AddEmployeeDTO");
const HttpResp = require('../../app/Application/Utils/HttpResp');

class EmployeeController {

    constructor(saveEmployee, getEmployee) {
        this.saveEmployee = saveEmployee;
        this.getEmployee = getEmployee;
    }

    async createEmployee(req, res) {
        const {body} = req;
        const addEmployeeDTO = new AddEmployeeDTO(body)
        const httpResponse = await this.saveEmployee.createEmployee(addEmployeeDTO.employee);
        HttpResp.convertToExpress(res, httpResponse);
    }

    async getEmployees(req, res) {
        const httpResponse = await this.getEmployee.getEmployees();
        HttpResp.convertToExpress(res, httpResponse);
    }
}

module.exports = EmployeeController;