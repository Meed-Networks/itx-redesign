import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
     port: 465,
     host: "webmail.getinterna.com",
     auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
     },
     secure: true,
     tls: {
          rejectUnauthorized: false
     }

})

export const mailOptions = {
     from: process.env.EMAIL_USERNAME,
     to: 'hanif.adedotun@gmail.com',
   };