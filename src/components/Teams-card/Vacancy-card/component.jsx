import './styles.css'

export const VacancyCard = ({src, number}) => {

return (
    <>
        <div className="card">
          <img src={src} alt="" className="photo" />
          <div className="text">{number}</div>
        </div>
    </>
)
}