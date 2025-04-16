require('dotenv').config();
const express = require("express");

const bodyParser = require("body-parser");

//const mongoPractice = require("./mongo");
const mongoPractice = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products", mongoPractice.createProduct);

//app.get("/products", mongoPractice.getProducts);

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
