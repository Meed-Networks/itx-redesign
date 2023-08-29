'use client'
import ReactPlayer from 'react-player'
import styles from './styles/adsContainer.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export const AdsContainer = () => {
     return(
          <section className={styles.adsContainer}>
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
                         <ReactPlayer 
                         controls  
                         loop 
                         playing
                         muted
                         url='/assets/ads/itxAds1.mp4'
                         className={styles.player}
                         width='100%'
                         height='100%'
                         // url='https://www.youtube.com/watch?v=M0CXcBPQMOI' 
                         />
                     </SwiperSlide>
               </Swiper>
          </section>

     )
}