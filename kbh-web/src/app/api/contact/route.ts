import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const contactEmail = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
    });

    // Add verification promise
    await new Promise((resolve, reject) => {
      contactEmail.verify(function (error, success) {
        if (error) {
          console.log('Verification error:', error);
          reject(error);
        } else {
          console.log('Server ready to send');
          resolve(success);
        }
      });
    });

    const name = `${firstName} ${lastName}`;
    const phoneNumber = phone || 'No phone number provided';

    const mail = {
      from: {
        name: name,
        address: process.env.EMAIL_ADDRESS,
      },
      to: process.env.EMAIL_ADDRESS,
      replyTo: email,
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

    // Add sending promise
    await new Promise((resolve, reject) => {
      contactEmail.sendMail(mail, (err, info) => {
        if (err) {
          console.error('Sending error:', err);
          reject(err);
        } else {
          console.log('Email sent:', info);
          resolve(info);
        }
      });
    });

    return NextResponse.json({
      code: 200,
      message: 'Message sent successfully!',
    });
  } catch (error: unknown) {
    console.error('Failed to send email:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
