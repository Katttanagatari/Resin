import card__artist from '../Img/card_artist.svg'
import card__programmer from '../Img/card_programmer.svg'
import './styles.css' 

export const VacancyCard = ({src, number}) => {
return (
    <>
        {src==='programmer'&&<>
            <div className="card">
                <img src={card__programmer} alt="" className="photo" />
                <div className="text">{number}</div>
            </div>
        </>}

        {src==='artist'&&<>
            <div className="card">
                <img src={card__artist} alt="" className="photo" />
                <div className="text">{number}</div>
            </div>
        </>}

    </>
)
}