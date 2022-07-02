import './topButton.scss';
import { useSelector } from 'react-redux';
// import { HashLink } from 'react-router-hash-link';

const TopButton = () => {
  const headerColor = useSelector((state) => state.headerColor);
  return (
    <button onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} type="button" className={headerColor ? 'topButton' : 'topButton topButton-hidden'} />
  );
};

export default TopButton;
