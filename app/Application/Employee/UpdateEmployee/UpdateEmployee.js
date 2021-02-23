const HttpResp = require("../../Utils/HttpResp");
const HttpStatusCode = require("../../Utils/HttpStatusCode");

class UpdateEmployee {

    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async updateEmployee(updateEmployee) {
        try {
            await this.employeeRepository.updateEmployee(updateEmployee);
            return HttpResp.create(HttpStatusCode.OK);
        } catch (e) {
            const body = { status: 'error', message: e.message};
            return body;
        }
    }
}

module.exports = UpdateEmployee;