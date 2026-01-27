const express = require("express");

const app = express();

//root route
app.get("/", (req, res) => {
  res.send("Home page");
});

//get all products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "prod 1",
    },
    {
      id: 2,
      label: "prod 2",
    },
    {
      id: 3,
      label: "prod 3",
    },
  ];

  res.json(products);
});

//get a single products
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const products = [
    {
      id: 1,
      label: "prod 1",
    },
    {
      id: 2,
      label: "prod 2",
    },
    {
      id: 3,
      label: "prod 3",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);

  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("product is not found! please try with different id");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
