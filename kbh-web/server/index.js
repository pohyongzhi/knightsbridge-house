
const path = require('path');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
    res.send({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to send');
    }
})

app.post("/contact", bodyParser.json(), (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone ? req.body.phone : 'No phone number provided';
    const message = req.body.message;
    // console.log("logging from server:", name, email, phone, message);
    const mail = {
        from: name,
        to: process.env.EMAIL_ADDRESS,
        subject: "Contact Form Submission",
        html: `
                <p> You have received a new Contact Us form submission from your website, from <b>${name}</b>.</p>
                <p><b> Contact Information: </b><br>
                        ${name} <br> 
                        ${email} <br> 
                        ${phone}</p>
                <p><b>Message: </b><br> 
                    ${message}</p>`
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.status(500).json({ error: "Failed to send email" });
        } else {
            res.status(200).json({ code: 200, message: "Message sent successfully!" });
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})