import SubCategory from "../models/SubCategory.js";
import mongoose from "mongoose";

 export const getSubCategories = async (req,res)=>{
  const categoryId = new mongoose.Types.ObjectId(req.params.id);

  const data = await SubCategory.find({
    category: categoryId
  });

  res.json(data);
};
