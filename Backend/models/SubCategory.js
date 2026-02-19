import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
   
  }
});

export default mongoose.model("SubCategory", subCategorySchema);
