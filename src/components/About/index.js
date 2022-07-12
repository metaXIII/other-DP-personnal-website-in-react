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
        <p>Mon intérêt pour le monde du web, du design et de l&#39;informatique m&#39;a poussé à entamer une
          reconversion pour devenir développeur web. C’est en janvier 2022 que j’ai commencé ma formation
          grâce à l’école O’Clock (promo Boson). Si vous souhaitez en connaître le programme, vous pouvez le
          consulter ici.
        </p>
        <p>Mon goût prononcé pour le visuel, l’art et le design, m’a naturellement orienté vers le domaine du
          front-end, c’est-à-dire vers l’ensemble des éléments visibles pour l’utilisateur et avec lesquels il peut
          directement interagir.
        </p>
        <p>En qualité de développeur, j’aimerais créer des expériences visuelles et interactives toujours
          satisfaisantes pour l&#39;utilisateur afin qu&#39;il puisse se concentrer sur l&#39;essentiel : les messages que vous
          souhaitez lui transmettre.
        </p>
        <p>David.</p>
      </article>
    </div>
  </section>
);

export default About;
