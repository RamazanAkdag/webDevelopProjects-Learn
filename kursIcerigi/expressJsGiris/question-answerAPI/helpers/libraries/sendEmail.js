const nodemailer = require("nodemailer");

const sendEmail = async (mailOptions) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMPT_PORT,
    secure: false, // true for 465, false for other ports
    service: "Gmail",
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
