import { Combination } from './Combination';
import { Memory } from './Memory';
import { Organ } from './Organ';

export interface StoreState {
  organ: Organ;
  combination: Combination;
  combinationIndex: number;
  memory: Memory;
}
