// == Import : npm
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';

render(
  // JSX dont on veut faire le rendu
  <Provider store={store}>
    <App />
  </Provider>,
  // emplacement DOM dans lequel on veut faire le rendu
  document.getElementById('root'),
);
