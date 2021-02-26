const uuid = require('uuid');

class EmployeeEntity {
    constructor({employeeId, firstName, lastName, email, dob, gender, address, city, phone}) {
        console.log(arguments)
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.phone = phone;

        // this.props = props
    }

    // get firstName() {
    //     return this.props.firstName
    // }

    static create(props, employeeId) {
        if(!employeeId) {
            employeeId = uuid.v4();
        }

        return new EmployeeEntity({employeeId, ...props})
    }

}

module.exports = EmployeeEntity;