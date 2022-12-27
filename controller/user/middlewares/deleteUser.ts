import * as express from "express";
import User from "../../../model/user";

class DeleteUser {
  user = new User();

  public async delete(req: express.Request, res: express.Response) {
    const id = req.headers["id"];
    console.log(id)
    const deleted = await this.user.model.findByIdAndDelete(id);
    if (deleted) {
      return res.json({ success: false, msg: "User successfully deleted!" });
    } else {
      return res.json({ success: false, msg: "Oops! Something went wrong" });
      // redirect to login page
    }
  }
}

export default DeleteUser;
