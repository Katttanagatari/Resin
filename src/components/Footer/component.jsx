import './styles.css'

export const Footer = () => {
    return(
        <header className="header" id='no-padding'>
              <div className='container header__container'>
                <a className='logo' href='%'>
                  Resin
                </a>
                <nav className='nav'>
                  <ul className='nav__list list-reset'>
                    <li className='nav__item'>
                      <a href='$' className='nav__link'>Offers</a>
                    </li>
                    <li className='nav__item'>
                      <a href='$' className='nav__link'>Blog</a>
                    </li>
                    <li className='nav__item'>
                      <a href='$' className='nav__link'>Team</a>
                    </li>
                    <li className='nav__item'>
                      <a href='$' className='nav__link'>Client reviews</a>
                    </li>
                    <li className='nav__item'>
                      <a href='$' className='nav__link'>Contant me</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
    )
    }