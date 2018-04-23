import * as React from 'react';
import Table from '../containers/Table';

export const Setzer = () => (
  <div
    id='setzer'
    tabIndex={-1}
  >
    <div>
      <div
        id='index'
      >
        {/*Index.Component(Index.Props(props.count, state.index, handleIndex))*/}
      </div>
      <div
        id='table'
      >
        <Table />
      </div>
      <div
        id='legend'
      >
        {/*<Legend />*/}
      </div>
      <div
        id='navigation'
      >
        {/*Navigation.Component()*/}
      </div>
      <div
        id='load'
      >
        {/*Open.Component(Open.Props(props, handleLoad))*/}
      </div>
      <div
        id='save'
      >
        {/*Save.Component(state.memory)*/}
      </div>
      <div
        id='copyright'
      >
        <p>("Marek Scholle, 2018")</p>
      </div>
    </div>
  </div>
);
