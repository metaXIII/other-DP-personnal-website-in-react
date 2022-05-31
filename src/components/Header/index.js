import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeHeaderBackground, toggleMenu, updateWidth, toggleMenuWithWidth } from '../../actions';

import HeaderBackground from './HeaderBackground';

import './header.scss';

const Header = () => {
  // Je récupère les valeurs du state que je mets dans des variables)
  // Valeur de la largeur de la fenêtre (window.innerWidth)
  const width = useSelector((state) => state.width);
  // est ce que le menu est visibile (booléen)
  const visibleMenu = useSelector((state) => state.visibleMenu);
  // est ce qu'il y a un fond au niveau du header
  const headerColor = useSelector((state) => state.headerColor);
  // je prépare ma fonction dispatch pour utiliser les actions prévus
  const dispatch = useDispatch();
  // fonction qui vient appliquer l'action changeHeaderBackground, cette action va
  // modifier le state headerColor entre true et false en fonction du scroll
  const changeColor = () => {
    if (window.scrollY >= 50) {
      dispatch(changeHeaderBackground(true));
    }
    else {
      dispatch(changeHeaderBackground(false));
    }
  };

  // fonction appeler à chaque mise à jour de l'affichage
  useEffect(() => {
    // fonction qui vient mettre à jour le state et appliquer une action
    // en fonction de la width
    const changeWidth = () => {
      // mise à jour de width dans le state
      dispatch(updateWidth(window.innerWidth));
      // si la fenêtre est suppérieur à 840px alors on ferme le menu
      if (window.innerWidth > 840) {
        dispatch(toggleMenuWithWidth(false));
      }
    };
    // j'ajoute un écouteur d'évènement qui écoute l'évènement resize
    // à chaque resize j'appelle la fonction changeWidth
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
            {/* affichage de la liste ul si le state visibileMenu est à true
            OU si la width est supérieur à 840px */}
            {(visibleMenu || width > 840) && (
              <ul className="liste">
                <li><a href="#services" onClick={() => {dispatch(toggleMenu());}} className="li">&#91; Services &amp; Skill &#93;</a></li>
                <li><a href="#portfolio" onClick={() => {dispatch(toggleMenu());}} className="li">&#91; Portfolio &#93;</a></li>
                <li><a href="#about" onClick={() => {dispatch(toggleMenu());}} className="li">&#91; A propos &#93;</a></li>
                <li><a href="#contact" onClick={() => {dispatch(toggleMenu());}} className="li">&#91; Contact &#93;</a></li>
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
