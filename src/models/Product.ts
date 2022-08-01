import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        product_id: {type: String},
        name: {type: String, required: true},
        category: {type: String, required: true},
        price: {type: Number, required: true},
        employee_id: {type: mongoose.Schema.Types.ObjectId, ref:'employees', required: true},

    },
    {versionKey: false}
)

const products:any = mongoose.model('employees', productSchema);

export default products;