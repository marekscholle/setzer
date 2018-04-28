import { List, Repeat } from 'immutable';

export class Combination {
  static empty(size: number): Combination {
    return new Combination(Repeat(false, size).toList());
  }

  constructor(readonly stops: List<boolean>) { }

  switched(index: number): Combination {
    return new Combination(this.stops.update(index, s => !s));
  }

  updated(index: number, on: boolean): Combination {
    return new Combination(this.stops.set(index, on));
  }
}
