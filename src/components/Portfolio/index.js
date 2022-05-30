import PortfolioElement from 'src/components/Portfolio/PortfolioElement';

import './portfolio.scss';

const Portfolio = () => (
  <section id="portfolio">
    <h2 className="title_section">Portfolio</h2>
    <div className="container_flex">
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
      <PortfolioElement />
    </div>
  </section>
);

export default Portfolio;
