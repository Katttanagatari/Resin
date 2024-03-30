import './styles.css'

export const InfoBtn = ({number, title, descr, toggle_button}) => {
return (
    <>
        {toggle_button==='enable'&&<>
            <button className="info__number-enable btn-reset">
                <div className="curcle__number">{number}</div>
                <div className="info__number__title">{title}</div>
                <div className="info__number__descr">{descr}</div>
            </button>
        </>}

        {toggle_button==='disable'&&<>
            <button className="info__number-disable btn-reset">
                <div className="curcle__number">{number}</div>
                <div className="info__number__title" id='info__number__title-disable'>{title}</div>
                <div className="info__number__descr" id='info__number__descr-disable'>{descr}</div>
            </button>
        </>}
    </>
)
}