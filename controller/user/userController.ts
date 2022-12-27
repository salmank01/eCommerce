import * as express from "express";
import Signup from "./middlewares/signup";
import UpdateUser from "./middlewares/updateUser";
import DeleteUser from "./middlewares/deleteUser";
import GetUser from "./middlewares/getUser";
import Login from "./middlewares/login";

class userController {
  // Create user
  public createUser(req: express.Request, res: express.Response): void {
    const signup = new Signup();
    signup.signup(req, res);
  }
  // Login User
  public login(req: express.Request, res: express.Response): void {
    const login = new Login();
    login.login(req, res);
  }
  // Update User
  public updateUser(req: express.Request, res: express.Response): void {
    const update = new UpdateUser();
    update.update(req, res);
  }
  // Get All Users
  public getUsers(req: express.Request, res: express.Response): void {
    const getUser = new GetUser();
    getUser.getAllUsers(req, res);
  }
  // Get a single user
  public getSingleUser(req: express.Request, res: express.Response): void {
    const getUser = new GetUser();
    getUser.getSingleUser(req, res);
  }
  // Delete User
  public deleteUser(req: express.Request, res: express.Response): void {
    const deleteUser = new DeleteUser();
    deleteUser.delete(req, res);
  }
}

export default userController;
