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
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deserunt harum quam voluptas, soluta voluptatem sed doloremque unde debitis corporis quidem, quasi error recusandae rerum suscipit ut voluptate reiciendis earum iusto a explicabo adipisci. Molestiae a pariatur corrupti ad necessitatibus vero optio veritatis rem nemo. Perspiciatis, quam tempore enim, cum eveniet eius fugiat adipisci consectetur deserunt aperiam esse commodi placeat optio perferendis deleniti! Minus explicabo sunt omnis maiores et minima perspiciatis voluptatum quaerat mollitia, suscipit eum natus voluptas ipsam magni ullam perferendis, excepturi voluptatem quae porro autem in nisi vitae. Quaerat, unde repudiandae nesciunt pariatur perspiciatis temporibus optio ratione maxime.
        </p>
      </article>
    </div>
  </section>
);

export default About;
