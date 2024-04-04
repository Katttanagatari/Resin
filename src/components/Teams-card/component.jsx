import './styles.css'
import {VacancyCard} from './Vacancy-card/component'

export const OurTeamsCard = () => {
    return(
        <section className="Card">
          <div className="container header__container">
          <VacancyCard src='programmer' number={14}/>
          <VacancyCard src='artist' number={5}/>
          <VacancyCard src='artist' number={5}/> 
          <VacancyCard src='programmer' number={14}/>
          <VacancyCard src='artist' number={5}/> 
          <VacancyCard src='programmer' number={14}/>
          </div>
        </section>
      )
}