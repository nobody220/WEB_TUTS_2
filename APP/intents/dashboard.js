'use strict';

module.exports.validateDashboard = function(lesson){
  var dash = ['html', 'css', 'js'];

  if(lesson && dash.indexOf(lesson.toLowerCase()) === -1){
    return validateDashboardResult(false, 'lesson', `${lesson} does not exist.`);
  }

  return validateDashboardResult(true, null, null);
};

function validateDashboardResult(isValid, violatedSlot, message){
  if(message === null){
    return{
      isValid,
      violatedSlot,
    };
  }
  else{
    return{
      isValid,
      violatedSlot,
      message:{
        contentType:'PlainText',
        content:message
      },
    };
  }
}
