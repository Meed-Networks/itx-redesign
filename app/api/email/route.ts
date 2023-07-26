import {htmlData} from '@/components/emails';

export interface IEmail {
  name: string;
  email: string;
  message: string;
}

// Notice from where NextResponse is imported:
import { NextResponse } from "next/server";
import { mailOptions, transporter } from '@/utils/nodemailer';


export async function POST(req: Request) {
  const {name, email, message} = await req.json() as IEmail;
  await transporter.sendMail({
    ...mailOptions,
    subject: `New Message from ${name}`,
    text:"A new ITX Message",
    html: htmlData({name, email, message})
  }).then(() => {
    return NextResponse.json({ response: 'Successfull' }, { status: 200 });
   }).catch((e) => {
    console.log(e);
    return NextResponse.json({ response: 'Unsuccessful' }, { status: 500 });
   })
}
