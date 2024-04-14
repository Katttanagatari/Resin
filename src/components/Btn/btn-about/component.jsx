import './styles.css'

export const AboutBtn = ({ text, onClick, isActive }) => {
return(
    <button className={isActive ? 'about__btn active ' : 'about__btn'} onClick={onClick}>
        <div className={isActive ? 'about__btn-text active' : 'about__btn-text'}>{text}</div>
    </button>

)
}