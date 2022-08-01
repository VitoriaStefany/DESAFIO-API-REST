import express from "express";
import EmployeeController from "../controllers/employeesController";

const router = express.Router();

router
    .get("/api/v1/employee", EmployeeController.listEmployees)
    .get("/api/v1/employee/:employee_id", EmployeeController.listEmployeesById)
    .post("/api/v1/employee", EmployeeController.registerEmployee)
    .put("/api/v1/employee/:employee_id", EmployeeController.updateEmployee)
    .delete("/api/v1/employee/:employee_id", EmployeeController.deleteEmpolyee)

export default router;