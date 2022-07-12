import { useInView } from 'react-intersection-observer';

import './contact.scss';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <section ref={ref} className={inView ? 'section_contact' : 'section_contact--notvisible'} id="contact">
      <h2 className="title_section">&#91; Contact &#93;</h2>
      {/* <div className="contact_container"> */}
      <section className="section_contact--mail">
        <p>david.poulain.<br />devweb<br />@gmail.com</p>
      </section>
      <section className="section_contact--social">
        <p className="socialItem">GitHub</p>
        <p className="socialItem">Twitter</p>
        <p className="socialItem">LinkedIn</p>
        <p className="socialItem">Instagram</p>
        <p className="socialItem">Facebook</p>
      </section>
      {/* </div> */}
    </section>
  );
};

export default Contact;
