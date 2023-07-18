'use client';
import {testimonials} from './testimonial';
import { Testimonial } from './testimonialComponent';
import styles from './testimonial.module.scss';

export const ViewTestimonialContainer = () => {
     return(
          <section className={styles.viewTestimonialContainer}>
               {testimonials.map((testimonial, i) => <Testimonial key={i} {...testimonial}/> )}
          </section>
     )
}