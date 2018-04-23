import { List } from 'immutable';

export class Stop {
  constructor(readonly index: number, readonly name: string) {}
}

// tslint:disable-next-line:max-classes-per-file
export class StopsGroup {
  constructor(readonly stops: List<Stop>, readonly name: string) {}
}

export interface Organ {
  count: number;
  size: number;
  stops: List<Stop>;
  groups: List<StopsGroup>;
}
