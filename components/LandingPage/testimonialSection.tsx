import SectionHeader from "./sectionHeader";
import styles from './styles/testimonialSection.module.scss';

export default function TestimonialSection() {
     return(
          <section className={styles.testimonialContainer}>
               <SectionHeader title="Hear from our clients"/>
               
          </section>
     )
}