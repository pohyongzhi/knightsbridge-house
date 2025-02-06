import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const contactEmail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const name = `${firstName} ${lastName}`;
    const phoneNumber = phone || 'No phone number provided';

    const mail = {
      from: name,
      to: process.env.EMAIL_ADDRESS,
      subject: "Contact Form Submission",
      html: `
        <p>You have received a new Contact Us form submission from your website, from <b>${name}</b>.</p>
        <p><b>Contact Information:</b><br>
          ${name}<br>
          ${email}<br>
          ${phoneNumber}</p>
        <p><b>Message:</b><br>
          ${message}</p>`
    };

    await contactEmail.sendMail(mail);
    
    return NextResponse.json({ 
      code: 200, 
      message: "Message sent successfully!" 
    });

  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}