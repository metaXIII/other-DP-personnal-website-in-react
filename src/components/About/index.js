/* eslint-disable max-len */
import './about.scss';
import picture from '../../assets/images/david.jpeg';

const About = () => (
  <section className="section_about" id="about">
    <h2 className="title_section">&#91; A propos &#93;</h2>
    <div className="flexContainer_about">
      <article className="container container_photo">
        <img src={picture} alt="David Poulain" className="photo" />
      </article>
      <article className="container container_text">
        <p>Je m'appelle David, et je suis développeur web.</p>
        <p>Mon intérêt pour le monde du web, du design et de l'informatique m'a poussé à entamer une reconversion professionnelle. En janvier 2022 j'ai débuté ma formation de développeur auprès de l'école O'Clock, au sein de la promo Boson. Si vous souhaitez connaitre le programme de cette formation, vous pouvez le consulter ici.</p>
        <p>Mon appétence pour le visuel, l'art et le design m'a naturellement orienté vers le domaine du front-end : l'ensemble des éléments que l'utilisateur peut voir et avec lesquels il peut intéragir directement.</p>
        <p>En tant que développeur, je souhaite créer des expériences visuelles et interactives qui soient toujours satisfaisante pour l'utilisateur afin qu'il puisse se concentrer sur l'essentiel : ce que vous souhaitez lui transmettre.</p>
      </article>
    </div>
  </section>
);

export default About;
