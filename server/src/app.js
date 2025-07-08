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
const cors = require("cors");

const PORT = process.env.PORT || 7777;

app.use(
  cors({
    origin: ["http://localhost:5173", "https://share-nest-zeta.vercel.app"],
    credentials: true,
  })
);

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
    server.listen(PORT, () => {
      console.log(`Server + Socket.IO listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database Cannot Connected");
  });
