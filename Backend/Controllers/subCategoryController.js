import SubCategory from "../models/SubCategory.js";

export const getSubCategories = async (req,res)=>{
  const data = await SubCategory.find({category:req.params.id});
  res.json(data);
};
