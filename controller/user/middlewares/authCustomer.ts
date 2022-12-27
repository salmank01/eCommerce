import * as jwt from "jsonwebtoken";
import * as express from "express";
require("dotenv").config();

class AuthCustomer {
  public async customerAuth(
    req: express.Request,
    res: express.Response,
    next: express.Next
  ) {
    // extract token
    const token = req.headers["x-access-token"];
    // check availibility of token
    if (!token) {
      return res.json({ success: false, msg: "Unauthorized Access" });
    }

    // verify token
    const verified = await jwt.verify(token, process.env.jwtSecret);

    if (!verified) {
      return res.json({ success: false, msg: "Unauthorized access" });
    }

    // Grant Access
    next();
  }
}

export default AuthCustomer;
