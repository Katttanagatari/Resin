import info_photo from '../img/info_photo.jpeg'
import './styles.css'

export const InfoCard = ({title,descr}) => {
return (
    <>
        <img src={info_photo} alt="" className="info__img" />
        <div className="info__title">{title}</div>
        <div className="info__desrc">{descr}</div>
    </>
    )
}