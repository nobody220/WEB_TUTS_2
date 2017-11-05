'use strict';

const greet = require('../intents/greeting');
const lexResponse = require('../response/response');

/**************************************
*                                     *
*            I N T E N T S            *
*                                     *
***************************************/

// GREET USER
module.exports.greetUserDirectory = function(intentRequest){
  return greet.greetUserIntent(intentRequest)
};

/**************************************
*                                     *
*           R E S P O N S E           *
*                                     *
***************************************/

// CLOSE RESPONSE
module.exports.closeResponseDirectory = function(sessionAttributes, fulfillmentState, message){
  return lexResponse.closeResponse(sessionAttributes, fulfillmentState, message);
};
