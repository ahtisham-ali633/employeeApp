const HttpResp = require("../../Utils/HttpResp");
const HttpStatusCode = require("../../Utils/HttpStatusCode");

class GetEmployee {

    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async getEmployees() {
        try {
            const employee = await this.employeeRepository.fetchAllEmployees();
            return HttpResp.create(HttpStatusCode.OK, employee);
        } catch (e) {
            const body = { status: 'error', message: e.message};
            return body;
        }
    }
}

module.exports = GetEmployee;