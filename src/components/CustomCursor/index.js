import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import './customCursor.scss';

const CustomCursor = React.forwardRef((props, ref) => {
  const backdrop = useSelector((state) => state.backdrop);
  const overlink = useSelector((state) => state.overlink);
  return (
    <div ref={ref} className={`cursor ${backdrop ? 'cursor--backdrop' : ''} `} />
  );
});

export default CustomCursor;
