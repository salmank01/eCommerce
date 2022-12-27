import * as express from "express";
import Controller from "../controller/user/userController";
import AuthAdmin from "../controller/user/middlewares/authAdmin";
import AuthCustomer from "../controller/user/middlewares/authCustomer";

const router = express.Router();
// Objects
const controller = new Controller();
const authAdmin = new AuthAdmin().adminAuth;
const authCustomer = new AuthCustomer().customerAuth;
// Routes
router.route("/signup").post(controller.createUser);
router.route("/login").post(controller.login);
router.route("/allusers").get(authAdmin, controller.getUsers);
router
  .route("/user")
  .get(authCustomer, controller.getSingleUser)
  .put(authCustomer, controller.updateUser)
  .delete(authCustomer, controller.deleteUser);

module.exports = router;
