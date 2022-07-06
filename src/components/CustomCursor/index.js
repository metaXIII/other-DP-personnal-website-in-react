import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import './customCursor.scss';

const CustomCursor = React.forwardRef((props, ref) => (
  <div ref={ref} className="cursor" />
));

export default CustomCursor;
