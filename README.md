# NodejsSms
#nexmo sms server with node js 
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'apiKey',
  apiSecret: 'apiSecret'
});

nexmo.message.sendSms('VIRTUALNUMBER', 'TONUMBER', 'TEXT', (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(responseData, null, 2));  
  }
});
