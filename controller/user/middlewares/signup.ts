import * as express from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import User from "../../../model/user";
require("dotenv").config();

class Signup {
  // create user object
  user = new User();

  // Signup logic
  public async signup(req: express.Request, res: express.Response) {
    const { name, username, password } = req.body;

    // check if user sent incomplete credentials
    if (!(name && username && password)) {
      return res.json({
        success: false,
        msg: "Complete credentials required!",
      });
    }

    // check if user already exists
    const oldUser = await this.user.model.findOne({ username });
    if (oldUser) {
      return res.json({ success: false, msg: "Username already taken" });
    }

    // hash password
    const pwd: string = await bcrypt.hash(password, 10);

    // create user
    const newUser = await this.user.model.create({
      name,
      username,
      password: pwd,
    });

    // Generate token
    const token: string = await jwt.sign(
      { id: newUser._id, username, role: newUser.role },
      process.env.jwtSecret
    );

    // send response
    if (newUser) {
      return res.json({
        success: true,
        msg: "User created",
        token,
        newUser,
      });
      // redirect to homepage

    } else {
      return res.json({ success: false, msg: "Oops! Something went wrong" });
    }
  }
}

export default Signup;
