import * as express from "express";
import Product from "../../../model/product";

class GetProduct {
  product = new Product();

  public async getSingleProduct(req: express.Request, res: express.Response) {
    const product = req.headers["product"];

    const singleProduct = await this.product.model.findOne({ product });
    if (!singleProduct) {
      return res.json({ success: false, msg: "Can't find any results" });
    }
    return res.json({ success: true, product: singleProduct });
  }

  public async getAllUsers(req: express.Request, res: express.Response) {
    const allProducts = await this.product.model.find({});
    if (allProducts) {
      return res.json({ success: true, products: allProducts });
    } else {
      return res.json({ success: false, msg: "Unknown error Occured!" });
    }
  }
}

export default GetProduct;
