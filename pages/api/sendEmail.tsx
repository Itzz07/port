// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// pages/api/send.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: 'zimbajoel1@gmail.com', // Your email
        pass: 'eybp qkbm hwcc zmsq', // Your email password (use an application-specific password)
      },
    });

    const mailOptions = {
      // from: `${email}`,
      to: 'zimbajoel1@gmail.com', // The recipient's email
      subject: `${subject}`,
      text: `Email: ${email}\n\n${message}`,
      replyTo: `${email}`,
    };
    


try {
  console.log('Received data:', req.body);

  await transporter.sendMail(mailOptions);

  console.log('Email sent successfully.');
  res.status(200).json({ success: true });
} catch (error) {
  console.error('Error sending email:', error);
  res.status(500).json({ success: false, error: 'Failed to send email' });
}

  } else {
    res.status(405).end();
  }
}
