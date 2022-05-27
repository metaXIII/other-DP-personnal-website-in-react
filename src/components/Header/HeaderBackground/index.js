import { useSelector } from 'react-redux';

const HeaderBackground = () => {
  const headerColor = useSelector((state) => state.headerColor);
  return (
    <div className={headerColor ? 'header_background header_background_on' : 'header_background'} />
  );
};

export default HeaderBackground;
