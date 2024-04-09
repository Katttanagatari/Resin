import './styles.css'
import {VacancyCard} from './Vacancy-card/component'
import {AboutBtn} from '../Btn/btn-about'
import { useState } from 'react';
const ComponentA = ({number}) => {<VacancyCard src='programmer' number={number}/>};
const ComponentB = ({number}) => {<VacancyCard src='artist' number={number}/>};



export const OurTeamsCard = () => {
  const [currentComponent, setCurrentComponent] = useState('A');

  const toggleComponent = () => {
    setCurrentComponent(currentComponent === 'A' ? 'B' : 'A');
  };
    return(
        <section className="Card">
          <div className='container about__container'>
            <div className='about__title'>How many of us?</div>
            <div className='about__engineer'>
              <AboutBtn text = 'Backend Engineer >'/>
              <AboutBtn text = 'UX/UI designer >'/>
            </div>
          </div>
          <div className="container header__container">
          <VacancyCard src='programmer' number={14} />
          <VacancyCard src='artist' number={5}/>
          <VacancyCard src='artist' number={5}/> 
          <VacancyCard src='programmer' number={14}/>
          <VacancyCard src='artist' number={5}/> 
          <VacancyCard src='programmer' number={14}/>
          </div>
        </section>
      )
}