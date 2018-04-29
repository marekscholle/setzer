import { Memory } from '../types/Memory';

export enum ActionType {
  LoadMemory = 'LOAD_MEMORY',
  ChangeStop = 'CHANGE_STOP',
  SaveCombination = 'SAVE_COMBINATION',
  LoadCombination = 'LOAD_COMBINATION',
  ZeroCombination = 'ZERO_COMBINATION',
  AllCombination = 'ALL_COMBINATION',
  ChangeCombination = 'CHANGE_COMBINATION',
}

export type Action =
  LoadMemory |
  ChangeStop |
  SaveCombination |
  LoadCombination |
  ZeroCombination |
  AllCombination |
  ChangeCombination;

export interface LoadMemory {
  type: ActionType.LoadMemory;
  memory: Memory;
}

export const loadMemory = (memory: Memory): LoadMemory => ({
  type: ActionType.LoadMemory,
  memory,
});

export interface ChangeStop {
  type: ActionType.ChangeStop;
  index: number;
}

export const changeStop = (index: number): ChangeStop => ({
  type: ActionType.ChangeStop,
  index,
});

export interface SaveCombination {
  type: ActionType.SaveCombination;
}

export const saveCombination = (): SaveCombination => ({
  type: ActionType.SaveCombination,
});

export interface LoadCombination {
  type: ActionType.LoadCombination;
}

export const loadCombination = (): LoadCombination => ({
  type: ActionType.LoadCombination,
});

export interface ZeroCombination {
  type: ActionType.ZeroCombination;
}

export const zeroCombination = (): ZeroCombination => ({
  type: ActionType.ZeroCombination,
});

export interface AllCombination {
  type: ActionType.AllCombination;
}

export const allCombination = (): AllCombination => ({
  type: ActionType.AllCombination,
});

export enum ChangeCombinationMethod {
  RELATIVE,
  ABSOLUTE,
}
export interface ChangeCombination {
  type: ActionType.ChangeCombination;
  method: ChangeCombinationMethod;
  position: number;
}

export const changeCombination = (method: ChangeCombinationMethod, position: number): ChangeCombination => ({
  type: ActionType.ChangeCombination,
  method,
  position,
});
