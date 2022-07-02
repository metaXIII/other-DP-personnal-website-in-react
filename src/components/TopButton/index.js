import './topButton.scss';
import { useSelector } from 'react-redux';
// import { HashLink } from 'react-router-hash-link';

const TopButton = () => {
  const headerColor = useSelector((state) => state.headerColor);
  return (
    <a href="#top" className={headerColor ? 'topButton' : 'topButton topButton-hidden'} />
    /* <Link to="#top" className={headerColor ? 'topButton' : 'topButton topButton-hidden'} /> */
  );
};

export default TopButton;
