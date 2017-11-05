'use strict';

// CLOSE
module.exports.closeResponse = function(sessionAttributes, fulfillmentState, message){
  return{
    sessionAttributes,
    dialogAction:{
      type: 'Close',
      fulfillmentState,
      message,
    }
  };
};
