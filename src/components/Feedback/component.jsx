import React from 'react';
import { useRef, useCallback } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Arr from '../../Img/Feedback_Arr.svg';
import { FeedBackReviews } from './Feedback-Reviews/component';
import Img from '../../Img/feedback_girl.svg';
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

export const Feedback = () => {
    const slides = [
        {
            img: 'men1',
            name: 'Ronald Richards',
            time: '01:55 pm',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.',
            job: 'desing',
        },
        {
            img: 'woman2',
            name: 'Ronald Richafs',
            time: '01:55 pm',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.',
            job: 'delopment',
        },
        {
            img: 'woman3',
            name: 'Ronald Rrds',
            time: '01:55 pm',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.',
            job: 'desing',
        },
        {
            img: 'men4',
            name: 'Ronald Richards',
            time: '01:55 pm',
            text: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.',
            job: 'desing',
        },
    ];

        const sliderRef = useRef(null);
      
        const handlePrev = useCallback(() => {
          if (!sliderRef.current) return;
          sliderRef.current.swiper.slidePrev();
        }, []);
      
        const handleNext = useCallback(() => {
          if (!sliderRef.current) return;
          sliderRef.current.swiper.slideNext();
        }, []);

    return (
        <section className="feedback">
            <div className="container">
                <div className="feedback__text">
                    <div className="feedback__title">Feedback from those who have already helped the mix</div>
                    <div className="feedback__arr">
                        <button className="feedback__arr btn-reset">
                            <img src={Arr} alt="" className="feedback__arr-left" onClick={handlePrev}/>
                        </button>
                        <button className="feedback__arr btn-reset" onClick={handleNext}>
                            <img src={Arr} alt="" className="feedback__arr-right" />
                        </button>
                    </div>
                </div>
                <div className="feedback__cards">
                    <Swiper
                        ref={sliderRef}
                        modules={[Navigation]}
                        spaceBetween={70}
                        slidesPerView={3}
                        loop={true}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <FeedBackReviews
                                    img={slide.img}
                                    name={slide.name}
                                    time={slide.time}
                                    text={slide.text}
                                    job={slide.job}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <img src={Img} alt="" className="feedback__img" />
            </div>
        </section>
    );
};

export default Feedback;