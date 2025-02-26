// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Configure the transporter for sending emails
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER, // Your Gmail address
          pass: process.env.EMAIL_PASS, // Your Gmail app password
        },
    });

      // Set up email data
    const mailOptions = {
        from: email, // Sender's email address (from the form)
        to: process.env.RECEIVER_EMAIL, // Your receiving email address
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      replyTo: email, // Allows you to reply directly to the sender's email
    };

      // Send the email
    await transporter.sendMail(mailOptions);
    res
        .status(200)
        .json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
    }
} else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
}
}
