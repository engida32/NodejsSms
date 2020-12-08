const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');
const Vonage = require('@vonage/server-sdk');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// init vonage 
const nexmo = new Nexmo({
  apiKey: '5966280a',
  apiScrete: ' HzMUjACBsNUNK2mq'
});




const app = express();
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// routing 
app.get('/', (req, res) => {
  res.render('index');
});
//webhooks
app.post('/webhooks/inbound-message', (req, res) => {
  console.log(req.body);

  res.status(200).end();
});
//catch form submit 

app.post('/', (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const from = req.body.number;
  const text = req.body.message
  const to = '';
  // const to = '+251920565749';
  //const text = 'message';

  const Nexmo = require('nexmo');
// nexmo api key 
  const nexmo = new Nexmo({
    apiKey: '5966280a',
    apiSecret: 'HzMUjACBsNUNK2mq'
  });

  //send sms 
  nexmo.message.sendSms('251932433954', '251932433954', 'TEXT', 
  (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(responseData, null, 2));
    }
  });
});
const port = 3000;
app.listen(port,
  () => console.log(`server started on ${port}`));
