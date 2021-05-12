const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
  res.send("服务器已经运行");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((x) => x._id == req.params.id);
  res.json(product);
});

app.listen(5000, console.log("服务已经开始监听5000..."));
