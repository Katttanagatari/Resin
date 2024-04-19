import './styles.css'
import info_bg from '../../Img/info__bng.png'
import info_card from '../../Img/info-card__smaller.svg'
import {InfoBtn} from '../Btn/btn-info/components'
import {InfoCard} from '../Info_card/component'
import {HeroBtn} from '../Btn/btn-hero/component'


export const Project = () => {
    return (
        <section className='info'>
          <img src={info_bg} alt="" className="info__bg" />
          <div className="container info__container">
            <div className="info-box">

              <InfoCard
              title={'How to choose the right customer?'}
              descr={'Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue nibh sit amet '}
              />

              <div className="info-card__smaller">
                <img src={info_card} alt="" className="info-card__img" />
                <div className="info-card__text">
                  <div className="info-card__title">The unseen of spending three</div>
                  <div className='info-card__container'>
                    <div className="info-card__descr">Solomon Standard Time</div>
                    <HeroBtn/>
                  </div>
                </div>
              </div>
            </div> 
            <div className="info__btn">
              <InfoBtn number={1} 
              title={'Inspired Magazine Design'} 
              descr={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '}
              toggle_button={'enable'}/>
              <InfoBtn number={2} 
              title={'Summer Catalog'} 
              descr={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '}
              toggle_button={'disable'}/>
              <InfoBtn number={3} 
              title={'Fashion Store Branding'} 
              descr={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. '}
              toggle_button={'disable'}/>
            </div>
          </div>
        </section>
      )
}