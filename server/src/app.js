const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth");

const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);

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
