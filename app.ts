import server from "./server/server";
require("./services/cloudinary.config");

const s = new server(3000);

// Start the server
s.startServer();
// Connect to the database
s.connectDB();
// Initialize Middlewares
s.initializeMiddlewares();
