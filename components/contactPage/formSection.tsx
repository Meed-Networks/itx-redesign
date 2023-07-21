'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { InputGroup } from './Input/input';
import { Button } from '../button';

export default function ContactForm({sendMail, loading}:{sendMail: Function, loading:boolean}) {
     const buttonClick = (e:any) =>{
          e.preventDefault();
          const entries = new FormData(e.target);
          const data = Object.fromEntries(entries);  
          sendMail(data);
     }
     return(
          <form className={styles.contactForm} onSubmit={buttonClick}>
               <InputGroup labelName='Full Name' name='name' placeholder='Firstname Lastname'/>
               <InputGroup labelName='Email' name='email' placeholder='example@here.com'/>
               <InputGroup labelName='Your message' name='message' multiple={5} placeholder='example@here.com'/>
               <Button describe='secondary' type="submit" isLoading={loading}>Submit</Button>
          </form>
     )
}