import { useInView } from 'react-intersection-observer';

import BoxElement from 'src/components/Portfolio/BoxElement';

import './portfolio.scss';

const Portfolio = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <div className="background">
      <section ref={ref} className={inView ? 'section_portfolio' : 'section_portfolio--notvisibile'} id="portfolio">
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
    </div>
  );
};

export default Portfolio;
