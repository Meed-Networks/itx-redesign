'use client';
import styles from './header.module.scss'
import Image from 'next/image'
import { Button } from '../button'
import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ['latin']});

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <main className={`${styles.main} ${inter.className}`}>
       <div className={styles.imageContainer}>
        <Image
          alt='ITX Logo'
          src="/assets/full-logo.svg"
          height="70"
          width="215"
          // sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px"
        />
      </div>  

      <div className={styles.midSection}>
          <h3>Home</h3>
          <h3>Services</h3>
          <h3>Pricing</h3>
          <h3>FAQ</h3>
      </div>

      <div className={styles.rightSection}>
          <Button describe='secondary'>Contact us</Button>
      </div>

      <div className={styles.menuSection}>
          <IoMenuOutline size={30} id={styles.menu} onClick={() => setMenu(!menu)}/>
      </div>
    </main>
  )
}

export function MobileNavigation(){
     return(
          <div className={styles.mobileNavbar}>
               
          </div>
     )
}
