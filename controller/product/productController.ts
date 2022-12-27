import * as express from "express";
import CreateProduct from "./middlewares/createProduct";

class ProductController {
  // create product
  public async create(req: express.Request, res: express.Response) {
    const createProduct = new CreateProduct();

    createProduct.createProduct(req, res);
  }
}

export default ProductController;
