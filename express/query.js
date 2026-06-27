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

app.get("/api/v1/query", (req, res) => {
  //   console.log(req.query);

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.status(200).send("No Products Matched");
  }
  res.status(200).json(sortedProducts);
  //   res.send("Hello word");
  //   http://localhost:5000/api/v1/query?name=john&id=4
  //   http://localhost:5000/api/v1/query?search=a&limit=2
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
