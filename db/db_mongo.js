const mongoose = require('mongoose');
const faker = require('faker');
const { port } = require("../server/server.js");
const { namespace } = require('../fakerDataGenerator.js')

mongoose.connect(`mongodb://localhost:${port}`, { useNewUrlParser: true });

const db = mongoose.connection();

// console log connection to new database
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(`we're connected!`);
});

// create CSV database file in main site folder
namespace();

// const productSchema = new mongoose.Schema({
//     ID: Number,
//     Prices: Number,
//     Descriptions: String,
//     Mockprice: Number,
//     Discount: Number,
// });


// const getAll = {

// }

// const insertItem = {

// }

// const deleteTask = {

// }