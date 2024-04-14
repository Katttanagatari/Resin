import './styles.css'
import {VacancyCard} from './Vacancy-card/component'
import {AboutBtn} from '../Btn/btn-about'
import { useState } from 'react';
import card__artist from '../../Img/card_artist.svg'
import card__programmer from '../../Img/card_programmer.svg'


export const OurTeamsCard = () => {
  const [content, setContent] = useState(card__programmer)
  const [number, setNumber] = useState('15')

  const handleClick = (type, number) => {
    setContent(type)
    setNumber(number)
  }
    return(
        <section className="Card">
          <div className='container about__container'>
            <div className='about__title'>How many of us?</div>
            <div className='about__engineer'>
              <AboutBtn
                onClick={() => handleClick(card__programmer, '15')} 
                text = 'Backend Engineer >'
                isActive={content === card__programmer}
              />
              <AboutBtn 
                onClick={() => handleClick(card__artist, '12')} 
                text = 'UX/UI designer >'
                isActive={content === card__artist}
                />
            </div>
          </div>
          <div className="container header__container">
          <VacancyCard src={content} number={number}/>
          <VacancyCard src={content} number={number}/>
          <VacancyCard src={content} number={number}/>
          <VacancyCard src={content} number={number}/>
          <VacancyCard src={content} number={number}/>
          <VacancyCard src={content} number={number}/>
          </div>
        </section>
      )
}