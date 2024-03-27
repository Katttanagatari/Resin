import './styles.css'

export const AboutBtn = ({text}) => {
return(
    <button className='about__btn'>
        <div className='about__btn-text'>{text}</div>
        {/*<img src={ArrowBtn} alt="Button Icon" className='about__btn-icon' />  */}
    </button>

)
}