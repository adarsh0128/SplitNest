const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  // console.log(process.env.MONGO_URI);

  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
