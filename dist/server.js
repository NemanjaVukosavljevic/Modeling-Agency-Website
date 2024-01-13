const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { name, email, instagram, message } = req.body;

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'easygotravelsss@outlook.com', // Your email address
      pass: 'Idejakopasszaemail!', // Your email password (consider using an app password for security)
    },
  });

  const mailOptions = {
    from: 'easygotravelsss@outlook.com', // Sender's email address
    to: `maze.vule@gmail.com`, // Recipient's email address
    subject: 'Subject of your email',
    text: `Name: ${name}\nEmail: ${email}\nInstagram Handle: ${instagram}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
