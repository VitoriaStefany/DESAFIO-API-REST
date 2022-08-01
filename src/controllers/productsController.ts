import express, { Request, Response } from "express"
import products from "../models/Product";

class ProductController {

    static listProducts = (req: Request, res: Response) => {
        products.find()
        .populate('employee', 'employee_id')
        .exec((err:any, products:any) => {
            res.status(200).json(products);
    })
    }

    static listProductsById = (req: Request, res: Response) => {
        products.find((err:any, products:any) => {
            const product_id = req.params.product_id;

            products.findById(product_id, ((err:any, products:any) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - Product not found.`})
                } else {
                    res.status(200).send(products);
                }
            }))
            
    })
    }

    static registerProduct = (req: Request, res: Response) => {
        let product = new products(req.body);

        product.save((err:any) => {

            if(err) {
                res.status(500).send({message: `${err.message} - Failed to register product`});
            } else {
                res.status(201).send(product.toJSON())
            }
        })
    }

    static updateProduct = (req: Request, res: Response) => {
        const product_id = req.params.product_id;

        products.findByIdAndUpdate(product_id, {$set: req.body}, (err:any) => {
            if (!err) {
                res.status(200).send({message: 'Product successfully updated'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deleteProduct = (req: Request, res: Response) => {
        if (!err) {
            res.status(200).send({message: 'Product successfully removed'})
        } else {
            res.status(500).send({message: err.message})
        }
    }

}

export default ProductController;