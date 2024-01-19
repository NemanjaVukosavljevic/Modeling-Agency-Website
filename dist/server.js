// const express = require('express');
// const app = express();
// const port = 3000;

// const bodyParser = require('body-parser');
// const cors = require('cors'); // Import the cors middleware

// const PORT = process.env.PORT || 3000;

// app.use(cors()); // Enable CORS for all routes
// app.use(bodyParser.json());

// const nodemailer = require('nodemailer');
// const ejs = require('ejs'); // Require ejs package

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/send-email', async (req, res, next) => {
//   try {
//     const { email, fname } = req.body;

//     // Set up email data with HTML template
//     const emailHTML = await generateEmailHTML(fname);

//     // Create a transporter using your email service credentials
//     const transporter = nodemailer.createTransport({
//         service: 'outlook', // e.g., 'Gmail' or 'Outlook'
//         auth: {
//             user: 'easygotravelsss@outlook.com', // Your email address
//             pass: 'Idejakopasszaemail!', // Your email password
//         },
//         tls: {
//           rejectUnauthorized: false, // Disable SSL/TLS certificate verification (not recommended for production)
//         },
//       });

//     // Set up email data
//     const mailOptions = {
//       from: 'easygotravelsss@outlook.com',
//       to: email,
//       subject: 'Confirmation Email',
//       html: emailHTML, // Include the generated HTML content as the email body
//     };

//     // Send the email
//     const info = await transporter.sendMail(mailOptions);

//     console.log('Confirmation email sent:', info.response);
//     res.status(200).send('Confirmation email sent successfully');
//   } catch (error) {
//     console.log('Error sending email:', error);
//     next(error); // Pass the error to the error-handling middleware
//   }
// });

// // Error-handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error:', err);
//   res.status(500).send('An error occurred while processing your request.');
// });

// async function generateEmailHTML(fname) {
//   try {
//     return await ejs.renderFile('email_template.ejs', { fname });
//   } catch (error) {
//     console.log('Error generating email content:', error);
//     throw new Error('Error generating email content');
//   }
// }

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
