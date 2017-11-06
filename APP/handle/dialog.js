'use strict';

const route = require('../route/route');

module.exports.manageInvocation = function(intentRequest){
  const source = intentRequest.invocationSource;

    if(source === 'DialogCodeHook'){
      return dialogCodeHook(intentRequest);
    }

    if(source === 'FulfillmentCodeHook'){
      return fulfillmentCodeHook(intentRequest);
    }
};

// DIALOG
function dialogCodeHook(intentRequest){
  const intentName = intentRequest.currentIntent.name;

    if(intentName === 'DashboardIntent'){
      return dashboardDialogCodeHook(intentRequest);
    }
}

// FULFILLMENT
function fulfillmentCodeHook(intentRequest){
  const intentName = intentRequest.currentIntent.name;

    if(intentName === 'DashboardIntent'){
      return dashboardFulfillmentCodeHook(intentRequest);
    }
}

/**************************************
*                                     *
*          F U N C T I O N            *
*                                     *
***************************************/

// DASHBOARD DIALOG CODE HOOK
function dashboardDialogCodeHook(intentRequest){
  var lesson = intentRequest.currentIntent.slots.dashboardResponse;
  var result = route.validateDashboardDirectory(lesson);

  return Promise.resolve(route.delegateResponseDirectory(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
}

// DASHBOARD FULFILLMENT CODE HOOK
function dashboardFulfillmentCodeHook(intentRequest){
  var lesson = intentRequest.currentIntent.slots.dashboardResponse;
  var msg = `Please select an ${lesson} lesson:  [INTRO, HISTORY]`;

  return Promise.resolve(route.closeResponseDirectory(intentRequest.sessionAttributes, 'Fulfilled', { contentType:'PlainText', content:msg }));
}
