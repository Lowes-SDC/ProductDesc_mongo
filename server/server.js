const express = require("express");
const app = express();
const port = 3332;
const path = require('path');
const mongoDb = require('../db/db_mongo.js');
const products = mongoDb.products;
const cors = require("cors");

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/desc', (req, res) => {
    let productID = req.query.id;
    console.log("Initiating server query to database with productID: " + productID);
    console.time(); 
    mongoDb.getOne(productID, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log(`This is the result of the database query: ${result}`);
            console.timeEnd()
            res.send(result);
            res.end();
        };
    });
});

app.listen(port, () => {console.log(`server is running on port ${port}`);});

module.exports.port = port;