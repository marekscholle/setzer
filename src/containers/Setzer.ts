import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  Action,
  allCombination, changeCombination,
  ChangeCombinationMethod,
  loadCombination,
  saveCombination,
  zeroCombination,
} from '../actions';
import { Setzer } from '../components/Setzer';

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onSaveCombination: () => dispatch(saveCombination()),
    onLoadCombination: () => dispatch(loadCombination()),
    onZeroCombination: () => dispatch(zeroCombination()),
    onAllCombination: () => dispatch(allCombination()),
    onChangeCombination: (shift: number) => dispatch(changeCombination(ChangeCombinationMethod.RELATIVE, shift)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Setzer);
