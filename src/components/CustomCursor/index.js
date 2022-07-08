import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import './customCursor.scss';

const CustomCursor = React.forwardRef((props, ref) => {
  const backdrop = useSelector((state) => state.backdrop);
  return (
    <div ref={ref} className={backdrop ? 'cursor cursor--backdrop' : 'cursor'} />
  );
});

export default CustomCursor;
