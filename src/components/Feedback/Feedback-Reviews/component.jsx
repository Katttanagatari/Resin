import men1 from '../../Img/men_1.png'
import woman2 from '../../Img/woman_2.png'
import woman3 from '../../Img/woman_3.png'
import men4 from '../../Img/men_4.png'
import './styles.css'

export const FeedBackReviews = ({img,name,time,text,job}) => {
return (
    <>
    {img==='men1'&&<>
        <div className="FeedBackReviews">
            <div className="FeedBack__title">
                <img src={men1} alt="" className="FeedBackReviews__img" />
                <div className="FeedBackReviews__name">{name},<span>&nbsp; {time}</span></div>
            </div>
            <div className="FeedBackReviews__descr">{text}</div>
            <div className="FeedBackReviews__job">
                <div className="FeedBackReviews__job-circle" id='pink'></div>
                <div className="FeedBackReviews__job-text">{job}</div>
            </div>
        </div>
        </>}
        {img==='woman2'&&<>
        <div className="FeedBackReviews">
            <div className="FeedBack__title">
                <img src={woman2} alt="" className="FeedBackReviews__img" />
                <div className="FeedBackReviews__name">{name},<span>&nbsp; {time}</span></div>
            </div>
            <div className="FeedBackReviews__descr">{text}</div>
            <div className="FeedBackReviews__job" id='larger'>
                <div className="FeedBackReviews__job-circle" id='orange'></div>
                <div className="FeedBackReviews__job-text">{job}</div>
            </div>
        </div>
        </>}
        {img==='woman3'&&<>
        <div className="FeedBackReviews">
            <div className="FeedBack__title">
                <img src={woman3} alt="" className="FeedBackReviews__img" />
                <div className="FeedBackReviews__name">{name},<span>&nbsp; {time}</span></div>
            </div>
            <div className="FeedBackReviews__descr">{text}</div>
            <div className="FeedBackReviews__job">
                <div className="FeedBackReviews__job-circle" id='pink'></div>
                <div className="FeedBackReviews__job-text">{job}</div>
            </div>
        </div>
        </>}
        {img==='men4'&&<>
        <div className="FeedBackReviews">
            <div className="FeedBack__title">
                <img src={men4} alt="" className="FeedBackReviews__img" />
                <div className="FeedBackReviews__name">{name},<span>&nbsp; {time}</span></div>
            </div>
            <div className="FeedBackReviews__descr">{text}</div>
            <div className="FeedBackReviews__job">
                <div className="FeedBackReviews__job-circle" id='pink'></div>
                <div className="FeedBackReviews__job-text">{job}</div>
            </div>
        </div>
        </>}
    </>
)
}   