import FlexElement from 'src/components/FlexContainer/FlexElement';

import './flexContainer.scss';

const FlexContainer = () => (
  <>
    <h2 className="title title_section">Portfolio</h2>
    <section className="container_flex">
      <FlexElement />
      <FlexElement />
      <FlexElement />
      <FlexElement />
      <FlexElement />
      <FlexElement />
    </section>
  </>
);

export default FlexContainer;
