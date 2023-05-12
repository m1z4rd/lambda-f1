require('dotenv').config();
const { connectToDatabase } = require('../lib/database');
let response = "";

let getDataSprints = async () => {
    try{
        const coll = process.env.MONGO_COLLECTION_SPRINTS;
        const db = await connectToDatabase();
        const db_collection = db.collection(coll);
        console.log(`Collection: ${coll}`);

        //Query for an item that has the item circuits
        //const query = { circuitid: 'baku' };
        const item = await db_collection.find({}).toArray();
        console.log(item);

        response = {
            statusCode: 200,
            body: JSON.stringify(item)
        };
    }
    catch(error){
        console.log(`(Error: ${error}`);
    }

    return response;
}

module.exports = getDataSprints();