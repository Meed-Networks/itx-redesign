import styles from './page.module.css';
import Header from '@/components/header';
import FooterSection from '@/components/footer';
import HomeSection from '@/components/LandingPage/homeSection';
import NumberSection from '@/components/LandingPage/numberSetion';
import ServicesSection from '@/components/LandingPage/servicesSection';
import CoverageSection from '@/components/LandingPage/coverageSection';
import AltSection from '@/components/LandingPage/altSection';
import TestimonialSection from '@/components/LandingPage/testimonialSection';
import NewHomeSection from '@/components/LandingPage/newHomeSection';
import { AdsContainer } from '@/components/LandingPage/adsSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header page="home"/>

      <NewHomeSection/>

      <AdsContainer/>

      <NumberSection/>

      <ServicesSection/>

      <CoverageSection/>

      <AltSection/>

      <TestimonialSection/>

      <FooterSection/>
    </main>
  )
}
