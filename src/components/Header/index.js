import './header.scss';

const Header = () => (
  <header className="header header_background">
    <div className="header_container">
      <h3 className="title title_header">David Poulain</h3>
    </div>
    <div className="header_container header_container--nav">
      <nav>
        <li><a href="#services" className="text">&#91; Services &amp; Skill &#93;</a></li>
        <li><a href="#portfolio" className="text">&#91; Portfolio &#93;</a></li>
        <li><a href="#about" className="text">&#91; A propos &#93;</a></li>
        <li><a href="#contact" className="text">&#91; Contact &#93;</a></li>
      </nav>
      <button className="darkmode" type="button" name="dark_light" onclick="toggleLightMode()" title="Toggle dark/light mode" />
    </div>
  </header>
);

export default Header;
