'use client';
import { IoStar } from 'react-icons/io5';
import { Itestimonial } from './testimonial';
import styles from './testimonial.module.scss';
import Image from 'next/image';
export const Testimonial = (props: Itestimonial) => {
     const {text, author, location} = props;
     return(
          <div className={styles.testimonialContainer}>
               <div >{[0,1,2,3,4].map((v,i) => <IoStar className={styles.ratingIcons} key={i} size="16"/>)} </div>
               <p className={styles.textSection}>{text}</p>
               <h3 className={styles.author}>{author}</h3>
               <p className={styles.location}>{location}</p>
               <Image 
               className={styles.image} 
               src="/assets/quotes.svg" 
               width="149" 
               height="121"
               alt="Quotes mark"/>
          </div>
     )
}