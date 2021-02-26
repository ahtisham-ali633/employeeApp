const HttpResp = require("../../Utils/HttpResp");
const HttpStatusCode = require("../../Utils/HttpStatusCode");

class UpdateEmployee {


    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async updateEmployee(updateEmployeeDTO, employeeId) {
        try {
            const {employee} = updateEmployeeDTO;
            await this.employeeRepository.updateEmployee(employee, employeeId);
            return HttpResp.create(HttpStatusCode.OK);
        } catch (e) {
            const body = { status: 'error', message: e.message};
            return body;
        }
    }
}

module.exports = UpdateEmployee;