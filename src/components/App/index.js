// == Import
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import {
  hideCustomCursor,
  showCustomCursor,
  cursorBackdrop,
  cursorOverLink,
  cursorLeaveContent,
} from 'src/actions';

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
  const { ref, inView } = useInView();
  const customCursorVisible = useSelector((state) => state.customCursorVisible);
  const cursor = React.createRef();
  const mousePosition = (event) => {
    cursor.current.setAttribute('style', `top:${event.clientY}px; left:${event.clientX}px;`);
  };

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
      dispatch(hideCustomCursor());
    }
  }, []);

  const handleMouseOver = (event) => {
    if (event.target.className === 'photo') {
      dispatch(cursorBackdrop());
    }
    if (event.target.className === 'li') {
      dispatch(cursorOverLink());
    }
  };

  const handleBackdropOff = (event) => {
    if (event.target.className === 'photo' || 'li') {
      dispatch(cursorLeaveContent());
    }
  };

  const hideCursor = () => {
    dispatch(hideCustomCursor());
  };

  const showCursor = () => {
    dispatch(showCustomCursor());
  };

  return (
    <div onMouseMove={mousePosition} onMouseLeave={hideCursor} onMouseOver={handleMouseOver} onMouseOut={handleBackdropOff} onMouseEnter={showCursor} className="app">
      { customCursorVisible && (<CustomCursor ref={cursor} />)}
      <Header />
      <TopButton />
      <MainTitile />
      <ServicesSkill />
      <Portfolio />
      {/* { inView && (<About ref={ref} />)} */}
      <About />
      <Contact />
    </div>
  );
}

// == Export
export default App;
