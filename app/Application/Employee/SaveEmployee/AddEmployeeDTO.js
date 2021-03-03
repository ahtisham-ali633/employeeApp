const EmployeeEntity = require("../../../Domain/Entites/EmployeeEntity");
const Email = require("../../../Domain/Employee/Email");

class AddEmployeeDTO {
    constructor(body) {
        this.body = body;
        // this.employee = EmployeeEntity.create({firstName, lastName, email, dob, gender, address, city, phone});
    }

    getEmployee(){
        const  {firstName, lastName,  dob, gender, address, city, phone} = this.body;
        let email = Email.create(this.body.email)
        return EmployeeEntity.create({firstName, lastName, email, dob, gender, address, city, phone});
    }



}

module.exports = AddEmployeeDTO;