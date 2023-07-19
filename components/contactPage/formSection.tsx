'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import { InputGroup } from './Input/input';
import { Button } from '../button';

export default function ContactForm() {

     const buttonClick = (e:any) =>{
          e.preventDefault();
          // var formData = new FormData(document.querySelector('form'))
          console.log(e)
     }
     return(
          <form className={styles.contactForm} onSubmit={(e) => console.log(e)}>
               <InputGroup labelName='Full Name' placeholder='Firstname Lastname'/>
               <InputGroup labelName='Email' placeholder='example@here.com'/>
               <InputGroup labelName='Your message' multiple={5} placeholder='example@here.com'/>
               <Button describe='secondary' onClick={buttonClick}>Submit</Button>
          </form>
     )
}