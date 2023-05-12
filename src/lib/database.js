'use strict';
require('dotenv').config();
const mongo = require('mongodb');
const { MongoClient } = mongo;
let cacheDb = null;
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DBNAME;

let connectToDatabase = async() => {
    if(cacheDb){
        console.log("Using a connection that already exists");
        return Promise.resolve(cacheDb);
    }
    else {
        const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        await client.connect();
        console.log("New Database connection");
        cacheDb = client.db(dbName);

        return cacheDb;
    }
};

module.exports = {
    connectToDatabase,
}