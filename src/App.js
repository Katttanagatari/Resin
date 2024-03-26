import './App.css';

function App() {
  return (
    <header className="header">
      <div className='container'>
        <a className='logo' href='%'>
          Resin
        </a>
        <nav className='nav'>
          <ul className='nav__list'>
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
        <button className='btn'>Get started</button>
      </div>
    </header>
  );
}

export default App;
