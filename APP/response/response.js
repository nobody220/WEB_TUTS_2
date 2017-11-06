'use strict';

// DELEGATE
module.exports.delegateResponse = function(sessionAttributes, slots){
  return{
    sessionAttributes,
    dialogAction: {
      type: 'Delegate',
      slots,
    },
  };
};

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
