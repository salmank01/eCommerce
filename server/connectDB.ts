import * as mongoose from "mongoose";
require("dotenv").config();
mongoose.set("strictQuery", true);
class Connection {
  connectDB = async () => {
    await mongoose
      .connect(
        `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.yjhed.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
      )
      .then(() => console.log("Connected to the Database"))
      .catch((err) => console.log("Connection failed", err));
  };
}
export default Connection;
