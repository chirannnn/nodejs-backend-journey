require("dotenv").config({ quiet: true });

const express = require("express");
const app = express();

const connectProductDB = require("./database/product_db");
const route = require("./routes/product-routes");

// connect to db
connectProductDB();

// middleware
app.use(express.json());

app.use("/api/products", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running");
});
