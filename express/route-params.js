// Params, query string and Route params
// Json basics
const express = require("express");
const app = express();
const { products } = require("./data");
app.get("/", (req, res) => {
  res.send('<h1>Homepage</h1><a href="api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
  // const singleProduct = products.find((product) => product.id === 1);
  // route parameters
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID),
  );

  if (!singleProduct) {
    res.status(404).send("Product doesn't exist");
  }
  res.json(singleProduct);
});

// Last example
app.get("/api/products/:productID/reviews/:reviewsID", (req, res) => {
  console.log(req.params);
  res.send("Hello World");
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
