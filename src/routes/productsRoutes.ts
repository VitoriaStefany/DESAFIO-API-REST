import express from "express";
import ProductController from "../controllers/productsController";

const router = express.Router();

router
    .get("/api/v1/product", ProductController.listProducts)
    .get("/api/v1/product/:product_id", ProductController.listProductsById)
    .post("/api/v1/product", ProductController.registerProduct)
    .put("/api/v1/product/:product_id", ProductController.updateProduct)
    .delete("/api/v1/product/:product_id", ProductController.deleteProduct)

export default router;