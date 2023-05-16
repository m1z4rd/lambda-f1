'use strict';
require('dotenv').config();
const getDataCircuits = require('./src/api/getDataCircuits');
const getDataSprints = require('./src/api/getDataSprints');


//**** Get all documents for Circuits
let getsCircuits = async () => {
  try{
    console.log('--- Enter to Circuits function ---');
    let response = getDataCircuits;

    return response;
  }
  catch(error){
    console.log('Error: ' + error);
  }
};

//**** Get all documents for Sprints
let getsSprints = async () => {
  try{
    console.log('--- Enter to Sprint function ---');
    let response = getDataSprints;

    return response;
  }
  catch(error){
    console.log('Error: ' + error);
  }
};


exports.index = async function(event) {
  try{
    let http_method = event['httpMethod'];
    let response = "";
    //let collection = event.queryStringParameters.collection != "" ? event.queryStringParameters.collection : event.pathParameters.collection;
    
    //*** This should be consider to have coherence with the functions section into serverless.yml 
    //**  
    let collection = event.pathParameters.collection;
    
    //console.log(`Path Parameters: ${event.pathParameters.collection}`);

    if(http_method == 'GET' && collection == 'circuits'){
      console.log(`:: Enter to gather ${collection}  info ::`);
      response = getsCircuits();
    }
    else if(http_method == 'GET' && collection == 'sprints'){
      console.log(`:: Enter to gather ${collection}  races info ::`);
      response = getsSprints();
    }

    return response;

  }
  catch(error){
    console.log(`(index) switch case statement [event] source Error: ${error}`);
  }
};