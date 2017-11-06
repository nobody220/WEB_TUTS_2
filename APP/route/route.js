'use strict';

const dialog = require('../handle/dialog');
const greet = require('../intents/greeting');
const dash = require('../intents/dashboard');
const lexResponse = require('../response/response');

/**************************************
*                                     *
*             H A N D L E             *
*                                     *
***************************************/

module.exports.manageInvocationDirectory = function(intentRequest){
  return dialog.manageInvocation(intentRequest);
};

/**************************************
*                                     *
*            I N T E N T S            *
*                                     *
***************************************/

// GREET USER
module.exports.greetUserDirectory = function(intentRequest){
  return greet.greetUserIntent(intentRequest);
};

// VALIDATE DASHBOARD INPUT
module.exports.validateDashboardDirectory = function(lesson){
  return dash.validateDashboard(lesson);
};

/**************************************
*                                     *
*           R E S P O N S E           *
*                                     *
***************************************/

// DELEGATE RESPONSE
module.exports.delegateResponseDirectory = function(sessionAttributes, slots){
  return lexResponse.delegateResponse(sessionAttributes, slots);
};

// CLOSE RESPONSE
module.exports.closeResponseDirectory = function(sessionAttributes, fulfillmentState, message){
  return lexResponse.closeResponse(sessionAttributes, fulfillmentState, message);
};
