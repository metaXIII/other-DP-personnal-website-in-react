import PortfolioElement from 'src/components/Portfolio/PortfolioElement';
import PortfolioOtherElement from 'src/components/Portfolio/PortfolioOtherElement';
import Viewpager from 'src/components/Portfolio/Viewpager';

import './portfolio.scss';

const Portfolio = () => (
  <section className="section_portfolio" id="portfolio">
    <h2 className="title_section">&#91; Portfolio &#93;</h2>
    <div className="container_flex">
      {/* <Viewpager /> */}
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      {/* <PortfolioOtherElement />
      <PortfolioOtherElement />
      <PortfolioOtherElement />
      <PortfolioOtherElement /> */}
    </div>
  </section>
);

export default Portfolio;
