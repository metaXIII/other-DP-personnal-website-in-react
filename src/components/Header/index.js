import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeHeaderBackground, toggleMenu, updateWidth, toggleMenuWithWidth } from '../../actions';

import HeaderBackground from './HeaderBackground';

import './header.scss';

const Header = () => {
  const width = useSelector((state) => state.width);
  const visibleMenu = useSelector((state) => state.visibleMenu);
  const headerColor = useSelector((state) => state.headerColor);
  const dispatch = useDispatch();
  const changeColor = () => {
    if (window.scrollY >= 50) {
      dispatch(changeHeaderBackground(true));
    }
    else {
      dispatch(changeHeaderBackground(false));
    }
  };

  useEffect(() => {
    const changeWidth = () => {
      dispatch(updateWidth(window.innerWidth));
      if (window.innerWidth > 840) {
        dispatch(toggleMenuWithWidth(false));
      }
    };
    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  window.addEventListener('scroll', changeColor);
  return (
    <>
      <HeaderBackground />
      <header className={headerColor ? 'header header_black' : 'header'}>
        <div className="header_container">
          <h3 className="title title_header">David Poulain</h3>
        </div>
        <div className="header_container header_container--nav">
          <nav>
            {(visibleMenu || width > 840) && (
              <ul className="liste">
                <li><a href="#services" className="li">&#91; Services &amp; Skill &#93;</a></li>
                <li><a href="#portfolio" className="li">&#91; Portfolio &#93;</a></li>
                <li><a href="#about" className="li">&#91; A propos &#93;</a></li>
                <li><a href="#contact" className="li">&#91; Contact &#93;</a></li>
              </ul>
            )}
            <button
              type="button"
              className="btn"
              onClick={() => {
                dispatch(toggleMenu());
              }}
            >
              BTN
            </button>
          </nav>
        </div>
      </header>
      <button 
            className="darkmode" 
            type="button" 
            name="dark_light" 
            // onclick="toggleLightMode()" 
            title="Toggle dark/light mode" />
    </>
  )
};

export default Header;
