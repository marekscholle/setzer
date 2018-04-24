import { Action, ActionType } from '../actions';
import { StoreState } from '../types/StoreState';

export function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case ActionType.CHANGE_STOP:
      return {
        ...state,
        combination: state.combination.switched(action.index),
      };

    case ActionType.SAVE_COMBINATION:
      const { combination, combinationIndex, memory } = state;
      return {
        ...state,
        memory: memory.updated(combinationIndex, combination),
      };

    default:
      return state;
  }
}
