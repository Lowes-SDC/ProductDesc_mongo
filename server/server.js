const express = require("express");
const app = express();
const port = 3332;
const path = require('path');
const db = require('../db/db');

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/todo', (req, res) => {
    db.getAll((err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            //console.log(result);
            res.send(result);
        }
    });
});

app.post('/todo', (req, res) => {
    console.log(req.body);
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