const EmployeeEntity = require("../../../Domain/Entites/EmployeeEntity");

class AddEmployeeDTO {
    constructor(body) {
        const {firstName, lastName, email, dob, gender, address, city, phone} = body;
        this.employeeId = EmployeeEntity.createNewId();
        this.employee = EmployeeEntity.createFromDetails(this.employeeId, firstName, lastName, email, dob, gender, address, city, phone);
    }
}

module.exports = AddEmployeeDTO;