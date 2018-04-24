import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  Action,
  changeCombination, ChangeCombinationMethod,
  loadCombination,
  saveCombination,
  zeroCombination,
} from '../actions';
import { Setzer } from '../components/Setzer';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ }: StoreState) {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onSaveCombination: () => dispatch(saveCombination()),
    onLoadCombination: () => dispatch(loadCombination()),
    onZeroCombination: () => dispatch(zeroCombination()),
    onChangeCombination: (shift: number) => dispatch(changeCombination(ChangeCombinationMethod.RELATIVE, shift)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setzer);
