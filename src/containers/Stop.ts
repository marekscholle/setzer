import { connect, Dispatch } from 'react-redux';

import { changeStop, ChangeStopAction } from '../actions';
import { Stop } from '../components/Stop';
import { StoreState } from '../types/StoreState';

export interface Props {
  index: number;
}

function mapStateToProps({ organ, combination }: StoreState, { index }: Props) {
  return {
    stop: organ.stops.get(index),
    on: combination.stops.get(index),
    memoryOn: false,
  };
}

function mapDispatchToProps(dispatch: Dispatch<ChangeStopAction>, { index }: Props) {
  return {
    onClick: () => dispatch(changeStop(index)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stop);
