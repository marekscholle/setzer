import * as React from 'react';
import Table from '../containers/Table';

export interface Props {
  onSaveCombination: () => void;
  onLoadCombination: () => void;
  onZeroCombination: () => void;
  onChangeCombination: (shift: number) => void;
}

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLDivElement>,
  { onSaveCombination, onLoadCombination, onZeroCombination, onChangeCombination }: Props) => {
  switch (e.key) {
    case 'ArrowRight':
      onChangeCombination(+1);
      break;

    case 'ArrowLeft':
      onChangeCombination(-1);
      break;

    case 's':
      onSaveCombination();
      break;

    case 'l':
      onLoadCombination();
      break;

    case '0':
      onZeroCombination();

    default:
  }
};

export const Setzer = (props: Props) => (
  <div
    id='setzer'
    tabIndex={-1}
    onKeyDown={e => handleKeyDown(e, props)}
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
