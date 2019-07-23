const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN_NAME
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, message, callback) => {
  const mailOptions = {
    from: email,
    to: "abdulmujeebj@gmail.com",
    subject: "Message from " + name,
    text: message
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = sendMail;
