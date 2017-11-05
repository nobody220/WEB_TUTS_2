'use strict';

const _index = require('./APP/index');

module.exports.intents = (event, context, callback) => {
  try{
    console.log(`BOT NAME: ${event.bot.name}`);
      _index(event).then(response => {
        console.log("HANDLER RESPONSE: " + JSON.stringify(response, null, 4));
        callback(null, response);
      });
  }
  catch(e){
    callback(e);
  }
};
