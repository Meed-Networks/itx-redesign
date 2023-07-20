'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { InputGroup } from './Input/input';
import { Button } from '../button';

export default function ContactForm({sendMail}:{sendMail: Function}) {
     const buttonClick = (e:any) =>{
          e.preventDefault();
          const entries = new FormData(e.target);
          const data = Object.fromEntries(entries);
          console.log(data);  
          sendMail(data);
     }
     return(
          <form className={styles.contactForm} onSubmit={buttonClick}>
               <InputGroup labelName='Full Name' name='name' placeholder='Firstname Lastname'/>
               <InputGroup labelName='Email' name='email' placeholder='example@here.com'/>
               <InputGroup labelName='Your message' name='message' multiple={5} placeholder='example@here.com'/>
               <Button describe='secondary' type="submit">Submit</Button>
          </form>
     )
}