import './boxElement.scss';

import FYP from 'src/assets/images/FYPcard.png';

const BoxElement = () => (
  <article className="card">
    <div className="card_front">
      <img className="card_front--image" src={FYP} alt="Follow Your Party" />
      <h3 className="card--name">Follow Your Party</h3>
      <p className="card--date">Juin 2022</p>
    </div>
    <div className="card_back">
      <div className="card_back--info">
        <p className="role">Product Owner, Lead Dev Front</p>
        <p className="client">Projet de fin de formation</p>
      </div>
      <button className="card_back--buton" type="button">Voir le projet</button>
      <div className="card_back--techno">
        <p className="technoList">React.JS, Redux, Symfony</p>
      </div>
    </div>
    <div className="card_background" />
  </article>
);

export default BoxElement;
