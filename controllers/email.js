const express = require('express');
const bodyParser = require("body-parser");
let router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
  const emailObject = req.body.data;
  console.log(emailObject);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'gmail',
        secure: false, // true for 465, false for other ports
        auth: {
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <oitowl7@gmail.com>', // sender address
        to: 'oitowl7@gmail.com', // list of receivers
        subject: 'Stuff and things', // Subject line
        text: `${req.body.data.message}`, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

});



module.exports = router;