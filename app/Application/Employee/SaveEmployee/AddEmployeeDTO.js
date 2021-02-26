const EmployeeEntity = require("../../../Domain/Entites/EmployeeEntity");

class AddEmployeeDTO {
    constructor(body) {
        const {firstName, lastName, email, dob, gender, address, city, phone} = body;
        this.employee = EmployeeEntity.create({firstName, lastName, email, dob, gender, address, city, phone});
    }
}

module.exports = AddEmployeeDTO;