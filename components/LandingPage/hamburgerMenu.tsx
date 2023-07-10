'use client'
import Link from 'next/link';
import styles from './styles/hamburger.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

export const HamburgerMenu = ({page, setMenu}:{page:'home' | 'services' | 'pricing' | 'faq' | 'contact', setMenu:Function}) => {
     return(
          <section className={styles.hamburgerContainer} onClick={() => setMenu(false)}>
               <div className={styles.hamburgerMenu} onClick={(e) => e.stopPropagation()}>
                    <IoCloseOutline size={30} className={styles.closeButton} onClick={() => setMenu(false)}/>
                    <div className={styles.links}>
                    <Link href="/"><h3 className={(page == 'home') ? styles.active : ''}>Home</h3></Link>
                    <a 
                         href="/"
                         onClick={(e) => {
                         let partners = document.getElementById('services');
                         e.preventDefault();
                         partners && partners.scrollIntoView({ behavior: 'smooth' });
                    }}
                    ><h3 className={(page == 'services') ? styles.active : ''}>Services</h3></a>
                    <Link href="/pricing"><h3 className={(page == 'pricing') ? styles.active : ''}>Pricing</h3></Link>
                    <Link href="/faq"><h3 className={(page == 'faq') ? styles.active : ''}>FAQ</h3></Link>
                    </div>
               </div>
          </section>

     )
}