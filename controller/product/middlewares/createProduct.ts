import * as express from "express";
import Product from "../../../model/product";

class CreateProduct {
  product = new Product();

  public async createProduct(req: express.Request, res: express.Response) {
    const { name, price, description } = req.body;
    const imagePath = req.file.url;

    // check if user sent the image
    if (!imagePath) {
      return res.json({ success: false, msg: "Product Image Required!" });
    }

    //check for complete product Info
    if (!(name && price && description)) {
      return res.json({ success: false, msg: "All fields required!" });
    }

    // create product
    const product = await this.product.model.create({
      name,
      price,
      description,
      imagePath,
    });
    if (product) {
      return res.json({
        success: true,
        msg: "Product successfully added to inventory",
      });
    } else {
      return res.json({ success: false, msg: "Oops! Something went wrong" });
    }
  }
}

export default CreateProduct;
