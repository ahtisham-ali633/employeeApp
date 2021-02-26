const EmployeeEntity = require("../../../Domain/Entites/EmployeeEntity");

class UpdateEmployeeDTO {
    constructor(body) {
        const {firstName, lastName, email, dob, gender, address, city, phone} = body;
        this.employee = EmployeeEntity.create({firstName, lastName, email, dob, gender, address, city, phone});
    }
}

module.exports = UpdateEmployeeDTO;