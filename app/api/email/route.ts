import MessageEmail from '@/components/emails';
import type { NextApiRequest, NextApiResponse } from 'next';
import {Resend} from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAIL_KEY);

export interface IEmail {
  name: string;
  email: string;
  message: string;
}

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   res.setHeader('Cache-Control', 's-maxage=10');

//   if (req.method === 'POST') {
     
//     } 
//      else {
//      return res.status(500).json({ error: 'An error occured. Please try again' });
//   }
// }

// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";

// Notice the function definition:
export async function GET(req: Request) {
    const {name, email, message} = await req.json() as IEmail;
    await resend.sendEmail({
     from: 'onboarding@resend.dev',
     to: 'hanifadedotun2k19@gmail.com',
     subject: 'You have a new message',
     react: MessageEmail({name, email, message}),
     }).then(() => {
      return NextResponse.json({ response: 'Successfull' }, { status: 200 });
     }).catch(() => {
      return NextResponse.json({ response: 'Unsuccessful' }, { status: 500 });
     })
 
}
