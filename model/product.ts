import * as mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, default: "This is a Product" },
  imagePath: { type: String },
});

class Product {
  model = mongoose.model("Product", productSchema);
}

export default Product;
