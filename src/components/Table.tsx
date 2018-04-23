import { Range } from 'immutable';
import * as React from 'react';

import { Organ, StopsGroup } from '../types/Organ';

export interface Props {
  organ: Organ;
}

export const Table = ({ organ }: Props) => (
  <table>
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
    <tbody>
      {Range(0, organ.groups.map((s: StopsGroup) => s.stops.size).max()).map((row: number) => (
        <tr
          key={row}
        >
          {organ.groups
          .map((group: StopsGroup, index) => {
            const stop = (row < group.stops.size) ? group.stops.get(row) : null;
            if (stop !== null) {
              return <td
                key={stop.index}
              >
                {stop.name}
              </td>;
            } else {
              return undefined;
            }
          })}
        </tr>
      ))}
    </tbody>
  </table>
);
