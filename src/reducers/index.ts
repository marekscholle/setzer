import { Action, ActionType, ChangeCombinationMethod } from '../actions';
import { Combination } from '../types/Combination';
import { StoreState } from '../types/StoreState';

export function reducer(state: StoreState, action: Action): StoreState {
  switch (action.type) {
    case ActionType.LoadMemory:
    return {
      ...state,
      memory: action.memory,
      filename: action.filename,
    };

    case ActionType.ChangeStop:
      return {
        ...state,
        combination: state.combination.switched(action.index),
      };

    case ActionType.SaveCombination: {
      const { combination, combinationIndex, memory } = state;
      return {
        ...state,
        memory: memory.updated(combinationIndex, combination),
      };
    }

    case ActionType.LoadCombination: {
      const { combinationIndex, memory } = state;
      return {
        ...state,
        combination: memory.combinations.get(combinationIndex)!,
      };
    }

    case ActionType.ZeroCombination: {
      const { organ } = state;
      return {
        ...state,
        combination: Combination.empty(organ.size),
      };
    }

    case ActionType.AllCombination: {
      const { organ } = state;
      return {
        ...state,
        combination: Combination.all(organ.stops.size),
      };
    }

    case ActionType.ChangeCombination: {
      const { organ } = state;
      let { combinationIndex: index } = state;
      switch (action.method) {
        case ChangeCombinationMethod.RELATIVE:
          index = index + action.position;
          break;
        case ChangeCombinationMethod.ABSOLUTE:
          index = action.position;
          break;
      }
      index = Math.max(0, Math.min(index, organ.count - 1));
      return {
        ...state,
        combinationIndex: index,
      };
    }

    default:
      return state;
  }
}
