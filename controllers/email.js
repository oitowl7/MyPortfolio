const express = require('express');
const bodyParser = require("body-parser");
let router = express.Router();
const nodemailer = require('nodemailer');
// const secret = require("../secret.js")

//for deployment
  // // console.log(secret);
  // // console.log(secret.secret.user + " " + secret.secret.pass);

  // const mailuser = process.env.USER /*|| secret.secret.user*/;
  // const mailpassword = process.env.PASS /*|| secret.secret.pass*/;

//for development
  // console.log(secret);
  // console.log(secret.secret.user + " " + secret.secret.pass);

  // const mailuser = process.env.USER || secret.secret.user;
  // const mailpassword = process.env.PASS || secret.secret.pass;

router.post('/send', (req, res) => {
  const emailObject = req.body.data;
  console.log(emailObject);
  // console.log(secret);
  // console.log(secret.secret.user + " " + secret.secret.pass);

  const mailuser = process.env.USER /*|| secret.secret.user*/;
  const mailpassword = process.env.PASS /*|| secret.secret.pass*/;

  const message = `
  From: ${req.body.data.firstName} ${req.body.data.lastName}
  Email: ${req.body.data.email}
  Reason: ${req.body.data.reason}
  Subject: ${req.body.data.subject}
  Budget and Timeframe: ${req.body.data.budget || ""} ${req.body.data.timetable || ""}
  Message: 
  ${req.body.data.message}
  `

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: mailuser, // generated ethereal user
          pass: mailpassword // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Jordan Shear 👻" <shear_j@hotmail.com>', // sender address
        to: 'oitowl7@gmail.com, jordanshearbusiness@gmail.com', // list of receivers
        subject: `${req.body.data.subject}`, // Subject line
        text: `${message}`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.send("Email sent successfully");

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

});



module.exports = router;