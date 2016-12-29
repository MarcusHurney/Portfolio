// load environment configurations
require('./settings/config');

var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var axios = require('axios');

var app = express();
const PORT = process.env.PORT || 3000;

// parses incoming requests into JSON, '*/*' accepts any type of request
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {

    res.send(__dirname + '/public/index.html');

});

app.post('/mail', function(req, res, next) {
  var smtpTransport = nodemailer.createTransport('SMTP',
    {
      service: 'SendGrid',
      auth: {
        user: process.env.SEND_USER,
        pass: process.env.SEND_PASS
    }
  });

  var mailOptions = {
    to: 'marcushurney@gmail.com',
    from: req.body.email,
    subject: 'A message from ' + req.body.name,
    text: req.body.message

  };

  // send the email using the mailOptions object defined above
  smtpTransport.sendMail(mailOptions, function(err) {
    if (err) { return next(err); }
    res.status(200).json("Email Sent");
  });
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});

// make GET request to projects for faster load times on Heroku
axios.get('https://point-of-sale-system.herokuapp.com/');
axios.get('https://elephant-leg-brand.herokuapp.com/');
axios.get('https://app-landing-page-demo.herokuapp.com/');
axios.get('https://forecast-fetcher.herokuapp.com/');
axios.get('https://xl-technology-demo.herokuapp.com/');
axios.get('https://hotel-spa-demo.herokuapp.com/');
axios.get('https://safe-house-chat.herokuapp.com/');
axios.get('https://full-stack-user-authentication.herokuapp.com/');
