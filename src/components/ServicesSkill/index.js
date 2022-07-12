/* eslint-disable max-len */
import { useInView } from 'react-intersection-observer';

import './servicesSkill.scss';

const ServicesSkill = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <div className="background">
      <section ref={ref} className={inView ? 'section_serviceSkill' : 'section_serviceSkill--notvisibile'} id="services">
        <h2 className="title_section">&#91; Services &amp; Skill &#93;</h2>
        <div className="flexContainer">
          <section className="section_service">
            <article className="service_card service_card--front">
              <h3 className="service_card_title">développement front-end</h3>
              <div className="separator" />
              <p>Développer des applications web dynamiques. Utilisation de store et de composants. Utilisations d'API, base de données, sessions.
              </p>
              <ul>
                <li>React.JS</li>
                <li>redux.JS</li>
                <li>SASS / SCSS</li>
                <li>Javascript Vanilla</li>
              </ul>
            </article>
            <article className="service_card service_card--integration">
              <h3 className="service_card_title">intégration web</h3>
              <div className="separator" />
              <p>Réalisation de site web responsive, adatpé aux mobiles. Toujours rechercher une expérience utilisateur optimale.</p>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Accessiblité</li>
                <li>SEO</li>
              </ul>
            </article>
          </section>
          <section className="section_service">
            <article className="service_card service_card--back">
              <h3 className="service_card_title">développement back-end</h3>
              <div className="separator" />
              <p>Structurer une application, organiser les données, gestion via le back-office. Etablissement des requêtes.</p>
              <ul>
                <li>PHP</li>
                <li>Programmation Orienté Objet</li>
                <li>MVC / API Rest / MySQL</li>
              </ul>
            </article>
            <article className="service_card service_card--project">
              <h3 className="service_card_title">Gestion de projet numérique</h3>
              <div className="separator" />
              <p>Définition des objectifs, établissement d'un cahier des charges, réflexion sur le design, organisation du développement en sprint.</p>
              <ul>
                <li>Cahier des charges</li>
                <li>User Stories</li>
                <li>Wireframes / Maquettes</li>
                <li>Versionning Git/GitHub</li>
              </ul>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ServicesSkill;
