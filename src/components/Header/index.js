import { useSelector, useDispatch } from 'react-redux';
import { changeHeaderBackground } from '../../actions';

import HeaderBackground from './HeaderBackground';

import './header.scss';

const Header = () => {
  const headerColor = useSelector((state) => state.headerColor);
  const dispatch = useDispatch();
  const changeColor = () => {
    if (window.scrollY >= 50) {
      console.log('je scroll de 50');
      dispatch(changeHeaderBackground(true));
    } else {
      dispatch(changeHeaderBackground(false));
    }
  };

  window.addEventListener('scroll', changeColor);
  return (
    <>
      {headerColor && (<HeaderBackground />)};
      <header className={headerColor ? 'header' : 'header'}>
        <div className="header_container">
          <h3 className="title title_header">David Poulain</h3>
        </div>
        <div className="header_container header_container--nav">
          <nav>
            <li><a href="#services" className="text">&#91; Services &amp; Skill &#93;</a></li>
            <li><a href="#portfolio" className="text">&#91; Portfolio &#93;</a></li>
            <li><a href="#about" className="text">&#91; A propos &#93;</a></li>
            <li><a href="#contact" className="text">&#91; Contact &#93;</a></li>
          </nav>
          <button 
            className="darkmode" 
            type="button" 
            name="dark_light" 
            // onclick="toggleLightMode()" 
            title="Toggle dark/light mode" />
        </div>
      </header>
    </>
  )
};

export default Header;
