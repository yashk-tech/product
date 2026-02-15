import Category from "../models/Category.js";

export const getCategories = async (req,res)=>{
  const data = await Category.find();
  res.json(data);
};
