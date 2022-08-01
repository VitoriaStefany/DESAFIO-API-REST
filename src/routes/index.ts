import express, { Request, Response } from "express";
import employees from "../models/Employee";
import products from "../models/Product";
import employeeSchema from "../models/Employee";

module.exports =  [
    {
        options: {
            validate: {
                payload: employeeSchema
            }
        }
    }
]

const routes = (app:any) => {
     app.route('/').get((req: Request, res: Response) => {
         res.status(200).send({titulo: "Curso de node"})
     })

    app.use(
        express.json(),
        employees,
        products
    )

}

export default routes;