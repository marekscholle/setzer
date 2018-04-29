import { connect, Dispatch } from 'react-redux';

import { Action, loadMemory } from '../actions';
import { Load } from '../components/Load';
import { Memory } from '../types/Memory';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ organ }: StoreState) {
  return {
    onLoad: (dispatch: (memory: Memory) => void) => (file: File) => {
      const reader = new FileReader();
      reader.onload = _ => {
        const buffer = reader.result as ArrayBuffer;
        const bytes = new Uint8Array(buffer);
        const memory = Memory.fromBytes(bytes, organ.count, organ.size);
        dispatch(memory);
      };
      reader.readAsArrayBuffer(file);
    },
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onLoad: (memory: Memory) => dispatch(loadMemory(memory)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    onLoad: stateProps.onLoad(dispatchProps.onLoad),
  }),
)(Load);
