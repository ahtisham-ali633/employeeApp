const app = require("./bootstrap");
const employeeRoutes = require("../Routes/employeeRoutes");

app.use("/api/employee", employeeRoutes);

module.exports = app;
