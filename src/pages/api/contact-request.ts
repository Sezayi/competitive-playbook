import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest,
    res: NextApiResponse) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'arslan.sezayi@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>

      `,
    });

    console.log('Message Sent', email.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
