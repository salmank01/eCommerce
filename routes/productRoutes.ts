import * as express from "express";
import ProductController from "../controller/product/productController";
const controller = new ProductController();

const upload = require("../../services/multer");
const router = express.Router();

router.route.post("/product", upload.single("product"), controller.c);
