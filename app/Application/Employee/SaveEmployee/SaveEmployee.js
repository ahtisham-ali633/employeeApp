const HttpResp = require("../../Utils/HttpResp");
const HttpStatusCode = require("../../Utils/HttpStatusCode");

class SaveEmployee {

    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async createEmployee(addEmployeeDTO) {
        try {
            const employee = await this.employeeRepository.createEmployee(addEmployeeDTO);
            return HttpResp.create(HttpStatusCode.OK, employee);
        } catch (e) {
            const body = { status: 'error', message: e.message};
            return body;
        }
    }
}

module.exports = SaveEmployee;