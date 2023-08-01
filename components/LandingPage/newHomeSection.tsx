'use client';

import Image from 'next/image';
import { Button } from '../button';
import styles from './styles/newHomeSection.module.scss';
import { Line } from './line';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default function NewHomeSection() {
     return(
          <section className={styles.homeContainer}>
               <Swiper
                    spaceBetween={100}
                    slidesPerView={1}
                    loop
                    centeredSlides={true}
                    autoplay={{
                         delay: 5000,
                         disableOnInteraction: false,
                         pauseOnMouseEnter: true,
                         
                    }}
                    modules={[Autoplay]}
                    className={styles.imageContainer}
                    >
                    <SwiperSlide className={styles.homeBox}>
                         <div className={styles.backdrop}></div>
                         <div className={styles.textSection}>
                              <h1>Fast and <br/> Unlimited Internet</h1>

                              <h3>Unlimited download and freedom - no throttling, no limits.</h3>

                              <Link href="/pricing"><Button describe='outline'>Explore Bundles</Button></Link>
                         </div>
                         <Image 
                         fill
                         className={styles.Homeimage}
                         style={{objectFit: "cover"}}
                         src='/assets/home/mast1.svg'
                         alt="Image of a mast"
                         />
                    </SwiperSlide>

                    <SwiperSlide className={styles.homeBox}>
                         <div className={styles.backdrop}></div>
                         <div className={styles.textSection}>
                              <h1>Fast and <br/>Unlimited Internet</h1>

                              <h3>Unlimited download and freedom - no throttling, no limits.</h3>

                              <Link href="/pricing"><Button describe='outline'>Explore Bundles</Button></Link>
                         </div>
                         <Image 
                         fill
                         className={styles.Homeimage}
                         style={{objectFit: "cover"}}
                         src='/assets/home/Nigeria-Telecommunication-Tower.jpg'
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
          </section>
     )
}