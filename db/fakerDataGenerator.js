// Faker data generator
const fs = require('fs');
const util = require('util');
const path = require ('path');
const async = require('async');
const faker = require('faker');
const Chance = require('chance');
const stringify = require('csv-stringify');
let chance = new Chance();

namespace('csv', () => {
    // run through the below functions in the waterfall array to generator new faker data to CSV file
    let numOfReconds = 10;
    
    async.waterfall([
        (callback) => {
            let arr = [];
            arr.push('ID,Prices,Descriptions,Mockprice,Discount\n');
            for (var i = 0; i < numOfReconds; i++) {
                // push the record number and then the random faker data in CSV file
                let marketPrice = chance.floating({ min: 0, max: 200, fixed: 2 });
                let discount = (chance.natural({ min: 0, max: 20})/100);
                let discountedPrice = marketPrice - (marketPrice * discount); 
                arr.push(i, marketPrice, faker.lorem.sentences(), discountedPrice, discount, '\n');
            }
            callback(null, arr)
        },
        // convert it to CSV
        (arr, callback) => {
            input = arr;
            stringify(input, { columns: 0, rowDelimiter: '\n' }, (err, output) => {
                callback(null, output)
            })
        },
        (csv, callback) => {
            // save to filesystem
            let filePath = './';
            let fileName = path.join(filePath + '.csv');
            fs.writeFile(fileName, csv, (err) => {
                if (err) return console.log( err );
                callback(null)
            });
        }
    ], (err, result) => {
        if (err) console.log("Error: ", err);
        process.exit()
    });
});

module.exports.namespace = namespace;