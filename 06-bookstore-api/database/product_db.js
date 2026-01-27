const mongoose = require("mongoose");

const connectProductDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://bookstore_api:bookstore_api@cluster0.bk6nkob.mongodb.net/",
    );

    console.log("Mongo DB is connected");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectProductDB;
