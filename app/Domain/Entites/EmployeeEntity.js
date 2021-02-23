const uuid = require('uuid');

class EmployeeEntity {
    constructor(employeeId, firstName, lastName, email, dob, gender, address, city, phone) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
        this.city = city;
        this.phone = phone;
    }

    static createFromDetails(employeeId, firstName, lastName, email, dob, gender, address, city, phone) {
        return new EmployeeEntity(employeeId, firstName, lastName, email, dob, gender, address, city, phone);
    }

    static createFromObject(obj) {
        return new EmployeeEntity(obj.employeeId, obj.firstName, obj.lastName, obj.email, obj.dob, obj.gender, obj.address, obj.city, obj.phone);
    }

    static createNewId() {
        return uuid.v4();
    }

}

module.exports = EmployeeEntity;