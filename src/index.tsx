import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import Setzer from './containers/Setzer';
import { reducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { Combination } from './types/Combination';
import { MartinuHallOrgan } from './types/MartinuHallOrgan';
import { Memory } from './types/Memory';
import { StoreState } from './types/StoreState';

const organ = new MartinuHallOrgan();

const preloadedState: StoreState = {
  organ,
  combination: Combination.empty(organ.size),
  combinationIndex: 0,
  memory: Memory.empty(organ.count, organ.size),
  filename: 'SETZ.DAT',
};

const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Setzer />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
