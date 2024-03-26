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
            <button className='btn btn-reset'>Get started</button>
          </div>
        </header>;
}

function MainComponent() {
  return <main>
            <selection className='hero'>
              <div className='container grid'>
                <div className='hero__left'>
                  <h1 className='visually-hidden'>Schedule ceremony tours site</h1>
                  <div className='hero__box'>
                    <div className='hero__box-hello'>Schedule ceremony site tours</div>
                  </div>
                  <div className='hero__box'>
                    <p className='hero__box-desrc'>Personally I&nbsp;could eat pizza for every meal for the rest of&nbsp;my&nbsp;life. Especially a&nbsp;buffalo chicken pizza!</p>
                  </div>
                  <button className='btn btn-reset'>Get started</button>
                </div>
                <div className='hero__right'>
                  <img src={hero_photo} alt='photo_abstractions' className='hero__photo' />
                </div>
              </div>
            </selection>
          </main>
}



function App() {
  return (
    <div>
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}

export default App;
