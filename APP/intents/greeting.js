'use strict';

const route = require('../route/route');

module.exports.greetUserIntent = function(intentRequest){
  const source = intentRequest.invocationSource;

  if(source === 'FulfillmentCodeHook'){
    return Promise.resolve(route.closeResponseDirectory(intentRequest.sessionAttributes, 'Fulfilled', null));
  }
};
