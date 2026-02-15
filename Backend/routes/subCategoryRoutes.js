import express from "express";
import { getSubCategories } from "../Controllers/subCategoryController.js";

const router = express.Router();
router.get("/:id", getSubCategories);
export default router;
