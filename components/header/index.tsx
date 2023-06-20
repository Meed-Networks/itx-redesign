'use client';
import styles from './header.module.scss'
import Image from 'next/image'
import { Button } from '../button'
import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin']});

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <main className={`${styles.main} ${inter.className}`}>
       <div className={styles.imageContainer}>
        <Image
          fill
          alt='ITX Logo'
          src="/assets/full-logo.svg"
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px"
        />
      </div>

      <div className={styles.midSection}>
          <div>Home</div>
          <div>Services</div>
          <div>Pricing</div>
          <div>FAQ</div>
      </div>

      <div className={styles.rightSection}>
          <Button describe='secondary'>Contact us</Button>
      </div>

      <div className={styles.rightSection}>
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
