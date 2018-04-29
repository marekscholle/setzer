import { Combination } from './Combination';
import { Memory } from './Memory';
import { Organ } from './Organ';

export interface StoreState {
  readonly organ: Organ;
  readonly combination: Combination;
  readonly combinationIndex: number;
  readonly memory: Memory;
  readonly filename: string;
}
