import express from "express";
import { getProductList,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js"

export const path = "/api/products";

const router = express.Router();

router.get('/', getProductList);

router.get('/:id', getProduct);

router.post('/', createProduct);

router.put("/:id", updateProduct);

router.delete('/:id', deleteProduct);

export default router;