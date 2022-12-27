import * as express from "express";
import * as bodyParser from "body-parser";
import Connection from "./connectDB";

class Server {
  app: express.Application;
  port: number;
  userRouter: express.Router;
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.userRouter = require(".././routes/router/userRoutes");
  }

  public startServer(): void {
    this.app.listen(this.port, () =>
      console.log(`Server running on port ${this.port}`)
    );
  }

  public connectDB(): void {
    const c = new Connection();
    c.connectDB();
  }

  public initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use("/ecommerce", this.userRouter);
  }
}

export default Server;
