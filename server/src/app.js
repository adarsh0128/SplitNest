const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");
const http = require("http");
const initializeSocket = require("./utils/Socket");
const chatRouter = require("./routes/chat");

const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);
app.use("/", chatRouter);

const server = http.createServer(app);
initializeSocket(server);

connectDB()
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(PORT, () => {
      console.log("App is listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database Cannot Connected");
  });
