import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import App from './components/App';
import './index.css';
import { reducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Combination } from './types/Combination';
import { MartinuHallOrgan } from './types/MartinuHallOrgan';
import { Memory } from './types/Memory';
import { StoreState } from './types/StoreState';

const organ = new MartinuHallOrgan();

const preloadedState: StoreState = {
  organ,
  combination: Combination.empty(organ.stops.size),
  combinationIndex: 0,
  memory: Memory.empty(organ.count, organ.size),
};

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
