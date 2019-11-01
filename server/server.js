const express = require("express");
const app = express();
const port = 3332;
const path = require('path');
const { products } = require('../db/db_mongo.js');
const cors = require("cors");

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/desc', (req, res) => {
    let productID = req.query.id;
    products.getOne(productID, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            res.send(result);
        }
    });
});

app.post('/todo', (req, res) => {
    db.insertItem(req.body.task, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            console.log(result);
            res.send('added to database');
        }
    });
});

app.delete("/todo/:id", (req, res) => {
    // TODO: add in database function to remove a single to do item from the table
    const id = req.params.id;
    console.log("id from server", id);
    db.deleteTask(id, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.send(data);
      }
    });
  });

app.listen(port, () => {console.log(`server is running on port ${port}`);});

module.exports.port = port;