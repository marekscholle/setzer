import { connect, Dispatch } from 'react-redux';

import { changeStop, ChangeStop } from '../actions';
import { Stop } from '../components/Stop';
import { StoreState } from '../types/StoreState';

export interface Props {
  index: number;
}

function mapStateToProps({ organ, combination, combinationIndex, memory }: StoreState, { index }: Props) {
  return {
    stop: organ.stops.get(index),
    on: combination.stops.get(index),
    memoryOn: memory.combinations.get(combinationIndex).stops.get(index),
  };
}

function mapDispatchToProps(dispatch: Dispatch<ChangeStop>, { index }: Props) {
  return {
    onClick: () => dispatch(changeStop(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stop);
