require("dotenv").config();
const mongoose = require("mongoose");

const connectProductDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Mongo DB is connected");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectProductDB;
