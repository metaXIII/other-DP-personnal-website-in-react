import './contact.scss';

const Contact = () => (
  <section className="section_contact" id="contact">
    <h2 className="title_section">&#91; Contact &#93;</h2>
    {/* <div className="contact_container"> */}
    <section className="section_contact section_contact--mail">
      <p>david.poulain.<br/>devweb<br/>@gmail.com</p>
    </section>
    <section className="section_contact section_contact--social">
      <p className="socialItem">GitHub</p>
      <p className="socialItem">Twitter</p>
      <p className="socialItem">LinkedIn</p>
      <p className="socialItem">Instagram</p>
      <p className="socialItem">Facebook</p>
    </section>
    {/* </div> */}
  </section>
);

export default Contact;
