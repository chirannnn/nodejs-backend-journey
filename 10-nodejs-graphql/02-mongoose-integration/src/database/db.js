const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.log("MongoDB connection failed : ", e);
    process.exit(1);
  }
};

module.exports = connectToDB;
