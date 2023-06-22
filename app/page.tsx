import styles from './page.module.css';
import Header from '@/components/header';
import FooterSection from '@/components/footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>

      {/* <LandingPage/> */}

      <FooterSection/>
    </main>
  )
}
