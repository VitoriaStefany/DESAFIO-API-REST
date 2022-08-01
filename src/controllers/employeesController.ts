import express, { Request, Response } from "express"
import employees from "../models/Employee";

class EmployeeController {

    static listEmployees = (req: Request, res: Response) => {
        employees.find((err:any, employees:any) => {
            res.status(200).json(employees); 
    })
    }

    static listEmployeesById = (req: Request, res: Response) => {
        employees.find((err:any, employees: any) => {
            const employee_id = req.params.employee_id;

            employees.findById(employee_id, ((err: any, employees: any) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - Employee not found.`})
                } else {
                    res.status(200).send(employees);
                }
            }))
            
    })
    }

    static registerEmployee = (req: Request, res: Response) => {
        let employee = new employees(req.body);
        employees.situation(true);

        employee.save((err:any) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Failed to register employee`});
            } else {
                res.status(201).send(employee.toJSON())
            }
        })
    }

    static updateEmployee = (req: Request, res: Response) => {
        const employee_id = req.params.employee_id;

        employees.findByIdAndUpdate(employee_id, {$set: req.body}, (err:any) => {
            if (!err) {
                res.status(200).send({message: 'Employee successfully updated'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteEmpolyee = (req: Request, res: Response) => {
        if (!err) {
            res.status(200).send({message: 'Employee successfully removed'})
        } else {
            res.status(500).send({message: err.message})
        }
    }

}

export default EmployeeController;