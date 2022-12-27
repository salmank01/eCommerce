import * as express from "express";
import User from "../../../model/user";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
require("dotenv").config();

class Login {
  user = new User();

  public async login(req: express.Request, res: express.Response) {
    const { username, password } = req.body;
    // check for incomplete credentials
    if (!(username && password)) {
      return res.json({ success: false, msg: "Complete credentials required" });
    }

    // verify username
    const u = await this.user.model.findOne({ username });
    if (!u) {
      return res.json({ success: false, msg: "Invalid Username" });
    }

    // verify password
    const verified: string = await bcrypt.compare(password, u.password);
    if (!verified) {
      return res.json({ success: false, msg: "Invalid Password" });
    }
    // Grant Access with a token
    const token: string = await jwt.sign(
      {
        id: u._id,
        username,
        role: u.role,
      },
      process.env.jwtSecret
    );

    res.json({ success: true, msg: "Access Granted", token });
  }
}

export default Login;
