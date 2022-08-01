import mongoose from 'mongoose';
import { office } from '../enums/office';


const employeeSchema = new mongoose.Schema(
    {
        employee_id: {type: String},
        name: {type: String, required: true},
        cpf: {type: String, required: true},
        office : {type: String, required: true},
        birthday: {type: Date, required: true},
        situation: {type: Boolean}
    },
    {versionKey: false}
);

const employees:any = mongoose.model('employees', employeeSchema);

export default employees;