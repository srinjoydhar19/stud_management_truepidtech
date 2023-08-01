const express = require('express');
const route=express.Route();
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Configure nodemailer to use an email service 
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your_email@gmail.com', // Replace with your email address
      pass: 'your_email_password', // Replace with your email password
    },
  });

  // Route for generating OTP and sending it to the student's email
route.post('/sendOTP', (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();

  // Send the OTP to the student's email
  const mailOptions = {
    from: 'your_email@gmail.com', // Replace with your email address
    to: email,
    subject: 'Email Verification OTP',
    text: `Your OTP for email verification is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending OTP');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('OTP sent successfully');
    }
});

// Keep track of generated OTPs and their associated email addresses
const otpMap = new Map();

// Route for verifying the received OTP
route.post('/verifyOTP', (req, res) => {
  const { email, otp } = req.body;

  // Check if the received OTP matches the generated OTP for the given email
  if (otpMap.has(email) && otpMap.get(email) === otp) {
    otpMap.delete(email); // Remove the used OTP from the map
    res.status(200).send('Email verification successful');
  } else {
    res.status(400).send('Invalid OTP');
  }
});

// Route for generating OTP and sending it to the student's email
route.post('/sendOTP', (req, res) => {
    const { email } = req.body;
    const otp = crypto.randomInt(100000, 999999).toString();
  
    // Storeing the generated OTP and its associated email in the map
    otpMap.set(email, otp);
  
    // Sending the OTP to the student's email
    const mailOptions = {
      from: 'your_email@gmail.com', // Replace with your email address
      to: email,
      subject: 'Email Verification OTP',
      text: `Your OTP for email verification is: ${otp}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error sending OTP');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('OTP sent successfully');
        }
      });
    });

    module.exports= route;
