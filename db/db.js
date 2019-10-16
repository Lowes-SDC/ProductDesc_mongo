const mysql = require('mysql');
const dbKey = require('./dbkey');
var connection = mysql.createConnection({
    host     : dbKey.HOST,
    user     : dbKey.USER,
    password : dbKey.PASSWORD,
    database : dbKey.DB
  });

connection.connect(()=> {console.log("connected to database");});

const getAll = callback => {
    connection.query('Select * from Item', (err,result) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, result);
        }
    });
};

const insertItem = (item, callback) => {
    connection.query('Insert into user (item) value (?)',[item], (err,result) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, result);
        }
    });
};

const deleteTask = (id, callback) => {
    console.log(id);
    connection.query('DELETE FROM user WHERE id=?',[id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            callback(null, result);
        }
})};


module.exports = {getAll, insertItem, deleteTask};

