import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory"
  }
});

export default mongoose.model("Product", productSchema);
