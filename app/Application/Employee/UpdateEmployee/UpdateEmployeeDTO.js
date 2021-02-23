const EmployeeEntity = require("../../../Domain/Entites/EmployeeEntity");

class UpdateEmployeeDTO {
    constructor(body) {
        const {employeeId, firstName, lastName, email, dob, gender, address, city, phone} = body;
        this.employee = EmployeeEntity.createFromDetails(employeeId, firstName, lastName, email, dob, gender, address, city, phone);
    }
}

module.exports = UpdateEmployeeDTO;