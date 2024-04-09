import info_photo from '../../Img/info_photo.jpeg'
import './styles.css'

export const InfoCard = ({title,descr}) => {
return (
    <div className="info__box">
        <img src={info_photo} alt="" className="info__img" />
        <div className="info__title">{title}</div>
        <div className="info__desrc">{descr}</div>
    </div>
    )
}