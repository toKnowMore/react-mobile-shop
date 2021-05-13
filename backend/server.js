import express from "express"
import dotenv from 'dotenv'
import products from "./data/products.js"

dotenv.config()

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

const PORT = process.env.PORT

app.listen(PORT, console.log(`服务器在${process.env.NODE_ENV}模式下${PORT}端口号运行...`));
