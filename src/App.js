import {VacancyCard} from './components/vacancy card/component'
import {AboutBtn} from './components/btn/about-btn/component'
import {HeroBtn} from './components/btn/hero-btn/component';
import './App.css';
import hero_photo from './components/img/hero_photo.png'
import React from 'react';

function HeaderComponent() {
  return <header className="header">
          <div className='container header__container'>
            <a className='logo' href='%'>
              Resin
            </a>
            <nav className='nav'>
              <ul className='nav__list list-reset'>
                <li className='nav__item'>
                  <a href='$' className='nav__link'>Offers</a>
                </li>
                <li className='nav__item'>
                  <a href='$' className='nav__link'>Blog</a>
                </li>
                <li className='nav__item'>
                  <a href='$' className='nav__link'>Team</a>
                </li>
                <li className='nav__item'>
                  <a href='$' className='nav__link'>Client reviews</a>
                </li>
                <li className='nav__item'>
                  <a href='$' className='nav__link'>Contant me</a>
                </li>
              </ul>
            </nav>
             <HeroBtn />
          </div>
        </header>;
}

function MainComponent() {
  return <section  className='hero'>
            <div className='container header__container'>
              <div className='hero__left'>
                <div className="hero-square__box">
                  <h1 className='visually-hidden'>Schedule ceremony tours site</h1>
                  <div className='hero__box'>
                    <div className='hero__box-hello'>Schedule ceremony site tours</div>
                  </div>
                  <div className='hero__box'>
                    <p className='hero__box-desrc'>Personally I&nbsp;could eat pizza for every meal for the rest of&nbsp;my&nbsp;life. Especially a&nbsp;buffalo chicken pizza!</p>
                  </div>
                  <HeroBtn />
                </div>
              </div>
              <div className='hero__right'>
                <img src={hero_photo} alt='photo_abstractions' className='hero__photo' />
              </div>
            </div>
          </section >

}

function AboutComponent() {
  return (
    <section  className='about'>
      <div className='container about__container'>
        <div className='about__title'>How many of us?</div>
        <div className='about__engineer'>
          <AboutBtn text = 'Backend Engineer >'/>
          <AboutBtn text = 'UX/UI designer >'/>
        </div>
      </div>
    </section>
  )
}

function CardLine() {
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

function InfoBlock() {
  return (
    <section className='info'>
      <div className="container">
        <div className="info__box">
          <img src="" alt="" className="info__img" />
          <div className="info__title">How to choose the right customer?</div>
          <div className="info__desrc">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue nibh sit amet </div>
        </div>
      </div>
    </section>
  )
}



function App() {
  return (
    <>
      <HeaderComponent />
      <MainComponent />
      <AboutComponent />
      <CardLine />
      <InfoBlock />
    </>
  );
}

export default App;
