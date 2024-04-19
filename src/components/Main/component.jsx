import './styles.css'
import { HeroBtn } from '../Btn/btn-hero/component'
import img_hero from '../../Img/hero_photo.png'

export const Main = () => {
return(
    <section  className='hero'>
            <div className='container header__container'>
              <div className='hero__left'>
                <div className="hero-square__box">
                  <h1 className='visually-hidden'>Schedule ceremony tours site</h1>
                    <div className='hero__box-hello'>Schedule ceremony site tours</div>
                    <p className='hero__box-desrc'>Personally I&nbsp;could eat pizza for every meal for the rest of&nbsp;my&nbsp;life. Especially a&nbsp;buffalo chicken pizza!</p>
                  <HeroBtn />
                </div>
              </div>
              <div className='hero__right'>
                <img src={img_hero} alt='photo_abstractions' className='hero__photo' />
              </div>
            </div>
          </section >
)
}