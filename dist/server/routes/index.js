var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');

var Recaptcha = require('../components/RecaptchaMiddleware');
var recaptcha = new Recaptcha('6LfMe0QUAAAAACovgF08FO92SAEPlaLOdKOF27tN', process.env.recaptcha_secret);

router.post('/report-violation', function (req, res) {
    if (req.body) {
        console.log('CSP Violation: ', req.body)
    } else {
        console.log('CSP Violation: No data received!')
    }
    res.status(204).end()
});

router.post('/contact', recaptcha.middleware.verify, function(req, res, next) {
    var recaptcha_success = true;
    if(req.recaptcha.error) {
        recaptcha_success = false;
    }

    var contact_email = req.body.email,
                 from = contact_email ? contact_email : 'chanoch@clearbrook.it';
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        from,
        to: 'chanoch@clearbrook.it',
        subject: `Contact request (recaptcha: ${recaptcha_success})`,
        text: `${req.body.message} phone: ${req.body.phone}`,
        html: `
            <h3>Contact request from bodypoise.co.uk</h3>
            <ul>
                <li>email address: ${from}</li>
                <li>phone number: ${req.body.phone}</li>
            </ul>
            <p>${req.body.message}</p>`,
    };
    sgMail.send(msg);
    res.send('{success: true}');
});

module.exports = router;
