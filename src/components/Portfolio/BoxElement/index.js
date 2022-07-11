import './boxElement.scss';

import FYP from 'src/assets/images/FYP.png';

const BoxElement = () => (
  <article className="card">
    <div className="card--front">
      <img src={FYP} alt="Follow Your Party" />
    </div>
    <div className="card--back"></div>
  </article>
);

export default BoxElement;
