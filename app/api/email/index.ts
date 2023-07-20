import MessageEmail from '@/components/emails';
import type { NextApiRequest, NextApiResponse } from 'next';
import {Resend} from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_KEY);

export interface IEmail {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=10');

  if (req.method === 'POST') {
     
    const {name, email, message} = req.body as IEmail;
    await resend.sendEmail({
     from: 'hanif.adedotun@gmail.com',
     to: 'hanifadedotun2k19@gmail.com',
     subject: 'You have a new message',
     // headers: '',
     react: MessageEmail({name, email, message}),
     })
      return res.status(201).json({ response: 'Successfull' });

    } 
     else {
     return res.status(500).json({ error: 'An error occured. Please try again' });
  }
}
