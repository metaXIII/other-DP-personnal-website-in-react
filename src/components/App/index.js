// == Import
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideCustomCursor, showCustomCursor } from 'src/actions';

import Header from 'src/components/Header';
import Portfolio from 'src/components/Portfolio';
import MainTitile from 'src/components/MainTitle';
import TopButton from 'src/components/TopButton';
import ServicesSkill from 'src/components/ServicesSkill';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import CustomCursor from 'src/components/CustomCursor';

import './styles.scss';

// == Composant
function App() {
  const dispatch = useDispatch();
  const customCursorVisible = useSelector((state) => state.customCursorVisible);
  let cursor = React.createRef();
  const mousePosition = event => {
    // console.log(cursor.current);
    cursor.current.setAttribute('style', `top:${event.pageY - 15}px; left:${event.pageX - 15}px;`);
  };

  const mousePositionToto = event => {
    // console.log(cursor.current);
    cursor.current.setAttribute('style', `top:${event.target.scrollTop - 15}px; left:${0}px;`);
  };

  const hideCursor = () => {
    dispatch(hideCustomCursor());
  };

  const showCursor = () => {
    dispatch(showCustomCursor());
  };

  window.addEventListener('scroll', mousePositionToto);

  return (
    <div onMouseMove={mousePosition} onMouseLeave={hideCursor} onMouseEnter={showCursor} className="app">
      { customCursorVisible && (<CustomCursor ref={cursor} />)}
      <Header />
      <TopButton />
      <MainTitile />
      <ServicesSkill />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

// == Export
export default App;
