import { Action } from '../actions';
import { StoreState } from '../types/StoreState';

export function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    default:
      return state;
  }
}
