import Arr from '../Img/Feedback_Arr.svg'
import { FeedBackReviews } from './Feedback-Reviews/component'
import Img from '../Img/feedback_girl.svg'

import './styles.css'

export const Feedback = () => {
return(
    <section className='feedback'> 
        <div className="container">
            <div className="feedback__text">
                <div className="feedback__title">Feedback from those who have already helped the mix</div>
                <div className="feedback__arr">
                    <button className='feedback__arr btn-reset'>
                        <img src={Arr} alt="" className="feedback__arr-left" />
                    </button>
                    <button className='feedback__arr btn-reset'>
                        <img src={Arr} alt="" className="feedback__arr-right" />
                    </button>
                </div>
            </div>
            <div className="feedback__cards">
                <FeedBackReviews
                    img={'men1'}
                    name={'Ronald Richards'}
                    time={'01:55 pm'}
                    text={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.'}
                    job={'desing'}
                />
                <FeedBackReviews
                    img={'woman2'}
                    name={'Ronald Richafs'}
                    time={'01:55 pm'}
                    text={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.'}
                    job={'delopment'}
                />
                <FeedBackReviews
                    img={'woman3'}
                    name={'Ronald Rrds'}
                    time={'01:55 pm'}
                    text={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.'}
                    job={'desing'}
                />
                <FeedBackReviews
                    img={'men4'}
                    name={'Ronald Richards'}
                    time={'01:55 pm'}
                    text={'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip.'}
                    job={'desing'}
                />
            </div>
            <img src={Img} alt="" className="feedback__img" />
        </div>
    </section>
)
}