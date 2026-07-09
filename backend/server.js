const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch((err) => console.error('MongoDB connection error ❌:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Endpoint to handle form submission
app.post('/send', async (req, res) => {
  const { name, email, service, message } = req.body;

  try {
    // 1. Save to MongoDB
    console.log('Saving to MongoDB...');
    const newMessage = new Message({ name, email, service, message });
    await newMessage.save();
    console.log('Saved to MongoDB ✅');

    // 2. Send Email
    console.log('Sending Email...');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      text: `
        You have a new message from your portfolio website:
        
        Name: ${name}
        Email: ${email}
        Service Needed: ${service}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email Sent ✅');

    res.status(200).json({ success: true, message: 'Message sent and saved successfully ✅' });
  } catch (error) {
    console.error('Error processing request ❌:', error);
    res.status(500).json({ success: false, message: 'Failed to send message ❌', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
