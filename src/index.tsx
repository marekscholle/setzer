import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, Store } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import './index.css';
import { reducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { MartinuHallOrgan } from './types/MartinuHallOrgan';
import { StoreState } from './types/StoreState';

const store: Store<StoreState> = createStore(
  reducer,
  {
    index: 1,
    organ: new MartinuHallOrgan(),
  },
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
