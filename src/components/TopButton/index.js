import './topButton.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TopButton = () => {
  const headerColor = useSelector((state) => state.headerColor);
  return (
    <button href="#top" className={headerColor ? 'topButton' : 'topButton topButton-hidden'} />
    /* <Link to="#top" className={headerColor ? 'topButton' : 'topButton topButton-hidden'} /> */
  );
};

export default TopButton;
