const HttpResp = require("../../Utils/HttpResp");
const HttpStatusCode = require("../../Utils/HttpStatusCode");

class SaveEmployee {
    /**
     *
     * @param employeeRepository
     */
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async createEmployee(addEmployeeDTO) {
        try {
            const employee = await this.employeeRepository.createEmployee(addEmployeeDTO);
            return HttpResp.create(HttpStatusCode.OK, employee);
        } catch (e) {
            const body = { status: 'error', message: e.message};
            return HttpResp.create(HttpStatusCode.ERROR, body);        }
    }
}

module.exports = SaveEmployee;