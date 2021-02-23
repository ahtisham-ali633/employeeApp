const router = require("express").Router();
const { employeeController } = require("../Controller");

router.post("/create", employeeController.createEmployee.bind(employeeController));
router.get("/fetchAll", employeeController.getEmployees.bind(employeeController));
router.put("/edit", employeeController.updateEmployee.bind(employeeController));

module.exports = router;