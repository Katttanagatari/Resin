import card__artist from '../../../Img/card_artist.svg'
import card__programmer from '../../../Img/card_programmer.svg'
import './styles.css'
import React, { useEffect, useRef } from 'react';

export const VacancyCard = ({src, number}) => {
    const hiddenElementsRef = useRef([]);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        console.log('132')
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
  
      hiddenElementsRef.current.forEach((el) => observer.observe(el));
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
return (
    <>
        {src==='programmer'&&<> 
            <div className="card hidden" ref={(el) => (hiddenElementsRef.current[0] = el)}>
                <img src={card__programmer} alt="" className="photo" />
                <div className="text">{number}</div>
            </div>
        </>}

        {src==='artist'&&<>
            <div className="card hidden" ref={(el) => (hiddenElementsRef.current[0] = el)}>
                <img src={card__artist} alt="" className="photo" />
                <div className="text">{number}</div>
            </div>
        </>}

    </>
)
}