import './topButton.scss';
import { useSelector } from 'react-redux';

const TopButton = () => {
  const headerColor = useSelector((state) => state.headerColor);
  return (
    <div className={headerColor ? 'topButton' : 'topButton-hiden'} />
  );
};

export default TopButton;
