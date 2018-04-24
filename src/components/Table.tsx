import { Range } from 'immutable';
import * as React from 'react';

import Stop from '../containers/Stop';
import { Organ, StopsGroup } from '../types/Organ';
import { EmptyStop } from './Stop';

export interface Props {
  organ: Organ;
}

const head = (organ: Organ) => (
  <thead>
    <tr>
      {organ.groups.map((group: StopsGroup, index: number) => (
        <td
          key={index}
        >
          {group.name}
        </td>
      ))}
    </tr>
  </thead>
);

const body = (organ: Organ) => {
  const maxStopSize = organ.groups.map((s: StopsGroup) => s.stops.size).max();
  return (
    <tbody>
      {Range(0, maxStopSize).map((rowIndex: number) => row(organ, rowIndex))}
    </tbody>
  );
};

const row = (organ: Organ, rowIndex: number) => (
  <tr
    key={rowIndex}
  >
    {organ.groups.map((group: StopsGroup, index) => {
      const stop = (rowIndex < group.stops.size) ? group.stops.get(rowIndex) : null;
      return (stop !== null) ? (
        <Stop
          key={stop.index}
          index={stop.index}
        />) :
        <EmptyStop
          key={`~${index}`}
        />;
    })}
  </tr>
);

export const Table = ({ organ }: Props) => (
  <table>
    {head(organ)}
    {body(organ)}
  </table>
);
