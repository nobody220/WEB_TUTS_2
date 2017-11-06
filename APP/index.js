'use strict';

const route = require('./route/route');

module.exports = function(intentRequest){
  const userId = intentRequest.userId;
  const intentName = intentRequest.currentIntent.name;

  console.log(`User ID: ${userId}`);
  console.log(`${intentName}  is Running...`);
  console.log(JSON.stringify(intentRequest, null, 4));

    // GREETING INTENT
    if(intentName === 'GreetingIntent'){
      return route.greetUserDirectory();
    }

    // DASHBOARD
    if(intentName === 'DashboardIntent'){
      return route.manageInvocationDirectory(intentRequest);
    }

    throw new Error(`Intent name: ${intentName} is not supported.`);
}
