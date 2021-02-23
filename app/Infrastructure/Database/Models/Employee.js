module.exports = (sequelize, DataTypes) => {
    const EmployeeModel = sequelize.define(
        'Employee', {
            employeeId: {type: DataTypes.STRING, primaryKey: true, allowNull: false},
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            dob: DataTypes.DATEONLY,
            gender: DataTypes.STRING,
            address: DataTypes.STRING,
            city: DataTypes.STRING,
            phone: DataTypes.STRING,
        },
        {
            timestamps: true,
            paranoid: true,
        }
    );
  
    return EmployeeModel;
};