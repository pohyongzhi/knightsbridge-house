import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      secure: true,
    });

    // Verify connection
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server ready to send emails');
          resolve(success);
        }
      });
    });

    const name = `${firstName} ${lastName}`;
    const phoneNumber = phone || 'No phone number provided';

    const mailData = {
      from: {
        name: name,
        address: process.env.EMAIL_ADDRESS,
      },
      replyTo: email,
      to: process.env.EMAIL_ADDRESS,
      subject: 'Contact Form Submission',
      html: `
        <p>You have received a new Contact Us form submission from your website, from <b>${name}</b>.</p>
        <p><b>Contact Information:</b><br>
          ${name}<br>
          ${email}<br>
          ${phoneNumber}</p>
        <p><b>Message:</b><br>
          ${message}</p>`,
    };

    // Send email with promise
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    return NextResponse.json({
      code: 200,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
