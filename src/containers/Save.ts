import { saveAs } from 'file-saver';
import { connect } from 'react-redux';

import { Save } from '../components/Save';
import { StoreState } from '../types/StoreState';

export interface Props {
  index: number;
}

function mapStateToProps({ organ, memory, filename }: StoreState) {
  return {
    onSave: () => {
      const bytes = memory.toBytes(organ.size);
      const blob = new Blob(new Array(bytes), {type : 'application/octet-stream'});
      saveAs(blob, filename);
    },
  };
}

export default connect(
  mapStateToProps,
  null,
)(Save);
