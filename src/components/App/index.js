// == Import
import Header from 'src/components/Header';
import FlexContainer from 'src/components/FlexContainer';
import MainTitile from 'src/components/MainTitle';

import './styles.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <MainTitile />
      <FlexContainer />
    </div>
  );
}

// == Export
export default App;
