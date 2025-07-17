import { Router } from "express";
import { getProducts, getProductById, getProductsByCategoryId } from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);
router.get("/:category/:categoryId", getProductsByCategoryId); 
router.get("/:id", getProductById);

export default router;
