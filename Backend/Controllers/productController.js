import Product from "../models/Product.js";

export const getProducts = async (req,res)=>{
   const subCategoryId = new mongoose.Types.ObjectId(req.params.id);

    const data = await Product.find({
      subCategory: subCategoryId
    });

    res.json(data);
};
