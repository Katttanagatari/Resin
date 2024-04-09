import './styles.css'

export const AboutBtn = ({text}) => {
return(
    <button className='about__btn'>
        <div className='about__btn-text'>{text}</div>
    </button>

)
}