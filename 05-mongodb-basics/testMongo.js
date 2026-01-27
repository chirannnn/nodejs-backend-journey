const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://chiran_db_user:chiran_db_user@cluster0.kcryxoi.mongodb.net/",
  )
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

const gameSchema = new mongoose.Schema({
  gameName: String,
  gameType: String,
  usersCount: Number,
  isStillUsed: Boolean,
  launchDate: { type: Date, default: Date.now },
});

const Games = mongoose.model("Games", gameSchema);

async function runGameQuery() {
  try {
    const game = await Games.create({
      gameName: "Free fire",
      gameType: "Battle ground",
      usersCount: 10000000,
      isStillUsed: true,
      launchDate: new Date("2017-12-25"),
    });

    console.log(game);

    // const getGames = await Games.find({});
    // console.log(getGames);

    const updateGame = await Games.findByIdAndUpdate(
      game._id,
      {
        $set: { gameName: "PUBG", isStillUsed: false },
      },
      { new: true },
    );
    console.log(updateGame);
  } catch (e) {
    console.log("Error -> ", e);
  } finally {
    await mongoose.connection.close();
  }
}

runGameQuery();
