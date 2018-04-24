import { Action } from '../actions';
import { CHANGE_STOP } from '../constants';
import { StoreState } from '../types/StoreState';

export function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case CHANGE_STOP:
      return {
        ...state,
        combination: state.combination.switched(action.index),
      };

    default:
      return state;
  }
}
