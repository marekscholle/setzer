import { connect, Dispatch } from 'react-redux';

import { changeCombination, ChangeCombination, ChangeCombinationMethod } from '../actions';
import { Index } from '../components/Index';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ organ, combinationIndex }: StoreState) {
  return {
    count: organ.count,
    index: combinationIndex,
  };
}

function mapDispatchToProps(dispatch: Dispatch<ChangeCombination>) {
  return {
    onChange: (position: number) => dispatch(changeCombination(ChangeCombinationMethod.ABSOLUTE, position)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
