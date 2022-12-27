import * as express from "express";
import * as bcrypt from "bcrypt";
import User from "../../../model/user";

class UpdateUser {
  user = new User();

  public async update(req: express.Request, res: express.Response) {
    const { _id, name, username, password } = req.body;

    if (!_id) {
      return res.json({ success: false, msg: "User ID required" });
    }
    // check if user exists in DB
    const u = await this.user.model.findById(_id);
    if (!u) {
      return res.json({ success: false, msg: "Invalid ID" });
    }

    // check if username already taken
    const existingUsername = await this.user.model.findOne({ username });
    // if id of existingUsername is not the same as id given by client, it means that username is already taken
    if (existingUsername) {
      if (existingUsername._id !== u._id) {
        return res.json({ success: false, msg: "Username already taken" });
      }
    }

    // Hash new password
    const pwd = await bcrypt.hash(password, 10);

    const updatedUser = await this.user.model.findByIdAndUpdate(_id, {
      name,
      username,
      password: pwd,
    });
    if (updatedUser) {
      return res.json({
        success: true,
        msg: "User info updated!",
        updatedUser,
      });
    } else {
      return res.json({ success: false, msg: "Unknown error occured!" });
    }
  }
}
export default UpdateUser;
