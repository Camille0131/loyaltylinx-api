import express from "express";
import * as product from "../controllers/product.js";

const router = express.Router();

router.post("/addProduct", product.addProduct);

router.get("/Products", product.getAllProduct);

router.get("/:id", product.getAllProductID);

router.put("/update/:id", product.updateProduct);

router.delete("/delete/:id", product.deleteProduct);

export default router;
