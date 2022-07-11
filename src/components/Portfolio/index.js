import PortfolioElement from 'src/components/Portfolio/PortfolioElement';
import BoxElement from 'src/components/Portfolio/BoxElement';

import './portfolio.scss';

const Portfolio = () => (
  <section className="section_portfolio" id="portfolio">
    <h2 className="title_section">&#91; Portfolio &#93;</h2>
    <div className="container_flex">
      {/* <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement /> */}
      <BoxElement />
      <BoxElement />
      <BoxElement />
      <BoxElement />
    </div>
  </section>
);

export default Portfolio;
