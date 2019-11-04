const fs = require('fs');
const faker = require('faker');
const Chance = require('chance');
const mongoose = require('mongoose');
const { port } = require("../server/server.js");
const fakerDataGenerator = require('./fakerDataGenerator.js');

// generate 10M record CSV file
// fakerDataGenerator.createCSV();

// create connection to local 'products' Mongo database
mongoose.connect(`mongodb://localhost:${port}/products`, { useNewUrlParser: true });

// 'Products' is our mongoose connection variable to run queries on
let db = mongoose.connection;

// Check to see if we are connected to local database
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(`we're connected!`);
});

const productSchema = new mongoose.Schema({
  _id: Number,
  marketPrice: Number,
  discount: Number,
  discountedPrice: Number,
  productDescription: String
});

const products = mongoose.model("products", productSchema);

// get specific product and its descriptions
const getOne = (productID, callback) => {
  console.log("This is the current ID: " + productID)
  products.findById(`${productID}`, 'Descriptions Prices Mockprice Discount').lean().exec((err, doc) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(`Successfully retrieved doc: ${doc}`);
      callback(null, doc);
    };
  });
};

module.exports = { getOne }