import './styles.css'
import {AboutBtn} from '../Btn/btn-about'

export const OurTeam = () => {
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