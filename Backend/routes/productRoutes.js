import express from "express";
import { getProducts } from "../Controllers/productController.js";

const router = express.Router();
router.get("/:id", getProducts);
export default router;
