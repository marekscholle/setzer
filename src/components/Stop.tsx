import * as React from 'react';

import * as Organ from '../types/Organ';

export interface Props {
  stop: Organ.Stop;
  on: boolean;
  memoryOn: boolean;
  onClick: () => void;
}

const onOff = (b: boolean) => b ? 'on' : 'off';

export const Stop = ({ stop, on, memoryOn, onClick }: Props) => (
  <td
    className={`stop-${onOff(on)}-${onOff(memoryOn)}`}
    onClick={onClick}
  >
    <span
      className='stop-index'
    >
      {`${stop.index + 1}. `}
    </span >
    <span>
      {`${stop.name}`}
    </span>
  </td >
);

export const EmptyStop = () => <td/>;
