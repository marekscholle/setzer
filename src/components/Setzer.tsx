import * as React from 'react';

import Index from '../containers/Index';
import Legend from '../containers/Legend';
import Save from '../containers/Save';
import Table from '../containers/Table';
import { Navigation } from './Navigation';

import './Setzer.css';

export interface Props {
  onSaveCombination: () => void;
  onLoadCombination: () => void;
  onZeroCombination: () => void;
  onAllCombination: () => void;
  onChangeCombination: (shift: number) => void;
}

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>, props: Props) => {
  switch (e.key.toLowerCase()) {
    case 'arrowright': props.onChangeCombination(+1); break;
    case 'arrowleft': props.onChangeCombination(-1); break;
    case 's': props.onSaveCombination(); break;
    case 'l': props.onLoadCombination(); break;
    case '0': props.onZeroCombination(); break;
    case 'a': props.onAllCombination(); break;
  }
};

export const Setzer = (props: Props) => (
  <div
    id='setzer'
    tabIndex={-1}
    onKeyDown={e => handleKeyDown(e, props)}
  >
    <div>
      <div id='index'><Index /></div>
      <div id='table'><Table /></div>
      <div id='save'><Save /></div>
      <div id='legend'><Legend /></div>
      <div id='navigation'><Navigation /></div>
      <div id='load'>{/*Open.Component(Open.Props(props, handleLoad))*/}</div>
      <div id='copyright'><p>Marek Scholle, 2018</p></div>
    </div>
  </div>
);
