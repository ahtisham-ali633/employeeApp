const app = require("./bootstrap");
const employeeRoutes = require("../Routes/employeeRoutes");
const adminUserRoutes = require("../Routes/adminUserRoutes");


app.use("/api/employee", employeeRoutes);
app.use("/api/admin", adminUserRoutes);

module.exports = app;
