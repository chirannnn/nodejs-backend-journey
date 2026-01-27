require("dotenv").config({ quiet: true });

const express = require("express");
const app = express();
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const PORT = process.env.PORT || 3000;

// connet to our database
connectToDB();

// Moddleware -> express.json()
app.use(express.json());

// routes here
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on ${PORT}`);
});
