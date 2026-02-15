import Product from "../models/Product.js";

export const getProducts = async (req,res)=>{
  const data = await Product.find({subCategory:req.params.id});
  res.json(data);
};
