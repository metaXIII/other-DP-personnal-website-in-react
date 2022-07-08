// == Import
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideCustomCursor, showCustomCursor, updateCursorPosition } from 'src/actions';

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
  const cursor = React.createRef();
  const cursorXposition = useSelector((state) => state.cursorXposition);
  const cursorYposition = useSelector((state) => state.cursorYposition);
  const mousePosition = (event) => {
    cursor.current.setAttribute('style', `top:${event.clientY}px; left:${event.clientX}px;`);
    // cursor.current.setAttribute('style', `transform : translate(-50%, -50%) translate(${event.clientY + window.pageYOffset - 15}px,${event.clientX + window.pageXOffset - 15}px);`);
  };

  const mousePositionWithScroll = () => {
    // console.log(window.pageYOffset);
    const cursorPositionTop = parseInt(cursor.current.style.top, 10);
    const cursorPositionLeft = parseInt(cursor.current.style.left, 10);
    
    // const windowY = window.pageYOffset;
    const windowY = window.scrollY;
    const windowX = window.scrollX;
    const scrollCursorPositionTop = cursorPositionTop + windowY;
    const scrollCursorPositionLeft = cursorPositionLeft + windowX;
    console.log(scrollCursorPositionTop - 15 + 'px');
    // console.log(scrollCursorPositionTop);
    // console.log(cursorPositionTop);
    // console.log(window.pageYOffset);
    // console.log(event);
    // console.log(window.pageYOffset);
    // console.log(cursor.current.getAttribute('style'));
    // console.log(cursor.current.style.top);
    cursor.current.setAttribute('style', `top:${scrollCursorPositionTop - 15}px; left:${scrollCursorPositionLeft - 15}px;`);
    console.log(cursor.current);
  };

  const hideCursor = () => {
    dispatch(hideCustomCursor());
  };

  const showCursor = () => {
    dispatch(showCustomCursor());
  };

  window.addEventListener('mousemove', mousePosition);

  return (
    <div onMouseLeave={hideCursor} onMouseEnter={showCursor} className="app">
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
