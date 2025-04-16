const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connected failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  //console.log(createdProduct) 
  //{name: 'Nokia', price: 700, _id: new ObjectId('6800061228286100e8fe04b0')}
  const result = await createdProduct.save();
  //console.log(typeof createdProduct.id)  //string
  //console.log(typeof createdProduct._id)  //object
  res.json(result)
};

const getProducts = async (req, res, next) => {
 
  const products = await Product.find().exec();
  res.json(products);

};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
