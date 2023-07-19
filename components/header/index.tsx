'use client';
import styles from './header.module.scss'
import Image from 'next/image'
import { Button } from '../button'
import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { Nunito_Sans } from 'next/font/google'
import Link from 'next/link';
import { HamburgerMenu } from '../LandingPage/hamburgerMenu';

const inter = Nunito_Sans({ subsets: ['latin']});

export default function Header({page}:{page:'home' | 'services' | 'pricing' | 'faq' | 'contact'}) {
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
          <Link href="/"><h3 className={(page == 'home') ? styles.active : ''}>Home</h3></Link>
          <Link 
          href="/#services"
          onClick={(e) => {
            if(page=='home' || page=='services') {
            let partners = document.getElementById('services');
            e.preventDefault();
            partners && partners.scrollIntoView({ behavior: 'smooth' });
          }
        }}
          ><h3 className={(page == 'services') ? styles.active : ''}>Services</h3></Link>
          <Link href="/pricing"><h3 className={(page == 'pricing') ? styles.active : ''}>Pricing</h3></Link>
          <Link href="/faq"><h3 className={(page == 'faq') ? styles.active : ''}>FAQ</h3></Link>
      </div>

      <div className={styles.rightSection}>
        <Link href="/contact"><Button describe='outline'>Contact us</Button></Link>
      </div>

      <div className={styles.menuSection}>
          <IoMenuOutline size={40} id={styles.menu} onClick={() => setMenu(!menu)}/>
      </div>

      {menu && <HamburgerMenu page={page} setMenu={setMenu}/>}
    </main>
  )
}
