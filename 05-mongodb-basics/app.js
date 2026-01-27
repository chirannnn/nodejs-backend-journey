const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://chiran_db_user:chiran_db_user@cluster0.kcryxoi.mongodb.net/",
  )
  .then(() => console.log("Connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActice: Boolean,
  tages: [String],
  createsAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    const newuser = await User.create({
      name: "Updated User",
      email: "updated@gmail.com",
      age: 70,
      isActice: true,
      tages: ["engineer"],
    });
    // const newuser = User.create({
    //   name: "Vaishnavi",
    //   email: "vaish@123.gmail.com",
    //   age: 25,
    //   isActice: true,
    //   tages: ["bookish", "pretty"],
    // });
    // await (await newuser).save();
    // console.log("Created new user", newuser);
    // const allUsers = await User.find({});
    // console.log(allUsers);
    // const getUserOfActiveFalse = await User.find({ isActice: false });
    // console.log(getUserOfActiveFalse);
    // const getJohnDoeUser = await User.findOne({ name: "John" });
    // console.log(getJohnDoeUser);
    // const getLastCreatedUserById = await User.findById(newuser._id);
    // console.log(getLastCreatedUserById);
    // const getUserBySelectedFields = await User.find().select("name email -_id");
    // console.log(getUserBySelectedFields);
    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);
    // const sortedUsers = await User.find().sort({ age: -1 });
    // console.log(sortedUsers);
    // const countDocuments = await User.countDocuments({ isActice: true });
    // console.log(countDocuments);

    const deletedUser = await User.findByIdAndDelete(newuser._id);
    console.log("Deleted User -> ", deletedUser);

    // const updateUser = await User.findByIdAndUpdate(
    //   newuser._id,
    //   {
    //     $set: { age: 0, isActice: false },
    //     $push: { tages: "updated" },
    //   },
    //   { new: true },
    // );

    console.log("updated User -> ", updateUser);
  } catch (e) {
    console.log("Error -> :", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExample();
