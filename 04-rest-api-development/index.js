const express = require("express");
const app = express();

app.use(express.json());

let games = [
  {
    no: 1,
    name: "Free Fire",
  },
  {
    no: 2,
    name: "Clash of clans",
  },
];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Infinite Media",
  });
});

app.get("/games", (req, res) => {
  res.json(games);
});

app.get("/games/:no", (req, res) => {
  const gNo = parseInt(req.params.no);
  const spGame = games.find((game) => game.no === gNo);

  if (spGame) {
    res.status(200).json(spGame);
  } else {
    res.status(404).json({ error: "Book Not found" });
  }
});

app.post("/add-game", (req, res) => {
  const newGame = {
    no: games.length + 1,
    name: `New Game ${games.length + 1}`,
  };

  games.push(newGame);
  if (newGame) {
    res.status(200).json({
      data: newGame,
      Message: "New game added",
    });
  } else {
    res.status(404).json({ error: "sonething went wrong" });
  }
});

app.put("/update/:no", (req, res) => {
  const gNo = parseInt(req.params.no);

  const currGame = games.find((game) => game.no === gNo);

  if (currGame) {
    currGame.name = req.body.name || currGame.name;

    res.status(200).json({
      data: currGame,
      message: "updated successfully",
    });
  } else {
    res.status(404).json({ error: "sonething went wrong" });
  }
});

app.delete("/delete/:no", (req, res) => {
  const gNo = parseInt(req.params.no);

  const ind = games.findIndex((game) => game.no === gNo);

  if (ind != -1) {
    const delGame = games.splice(ind, 1);

    res.status(200).json({
      data: delGame[0],
      message: "deleted successfully",
    });
  } else {
    res.status(404).json({ error: "sonething went wrong" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
