import * as express from "express";
import User from "../../../model/user";

class GetUser {
  user = new User();

  public async getSingleUser(req: express.Request, res: express.Response) {
    const username = req.headers["username"];
    console.log(username)
    const singleUser = await this.user.model.findOne({ username });
    if (!singleUser) {
      return res.json({ success: false, msg: "User not found!" });
    }
    return res.json({ success: true, user: singleUser });
  }

  public async getAllUsers(req: express.Request, res: express.Response) {
    const allUsers = await this.user.model.find({});
    if (allUsers) {
      return res.json({ success: true, users: allUsers });
    } else {
      return res.json({ success: false, msg: "Unknown error Occured!" });
    }
  }
}

export default GetUser;
