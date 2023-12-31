'use client';

import Image from 'next/image';
import { Button } from '../button';
import styles from './styles/landingPage.module.scss';
import { Line } from './line';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function HomeSection() {
     return(
          <section className={styles.homeContainer}>
               <div className={styles.textSection}>
                    <h1>Fast and <br/><span className="secondary">Unlimited <Line className={styles.scribbleLine} width="225" height="15"/><span></span></span> Internet</h1>

                    <h3>Unlimited download and freedom - no throttling, no limits.</h3>

                    <Link href="/pricing"><Button describe='secondary'>Explore Bundles</Button></Link>
               </div>

               <div className={styles.imageContainer}>
               <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    centeredSlides={true}
                    autoplay={{
                         delay: 4000,
                         disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className={styles.imageContainer}
                    >
                    <SwiperSlide>
                         <Image 
                         width= {600}
                         height= {500}
                         className={styles.Homeimage}
                         style={{objectFit: "contain"}}
                         src='/assets/mast.svg'
                         alt="Image of a mast"
                         />
                    </SwiperSlide>

                    <SwiperSlide>
                         <Image 
                         width= {600}
                         height= {500}
                         className={styles.Homeimage}
                         style={{objectFit: "contain"}}
                         src='/assets/mast.svg'
                         alt="Image of a mast"
                         />
                    </SwiperSlide>

                    {/* <SwiperSlide>
                         <Image 
                         width= {600}
                         height= {500}
                         className={styles.Homeimage}
                         style={{objectFit: "contain"}}
                         src='/assets/home/mast3.png'
                         alt="Image of a mast"
                         />
                    </SwiperSlide> */}

                    {/* <SwiperSlide>
                         <Image 
                         width= {600}
                         height= {500}
                         className={styles.Homeimage}
                         style={{objectFit: "contain"}}
                         src='/assets/home/Nigeria-Telecommunication-Tower.jpg'
                         alt="Image of a mast"
                         />
                    </SwiperSlide> */}
                   
                    </Swiper>
                    
               </div>
          </section>
     )
}