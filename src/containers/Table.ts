import { connect } from 'react-redux';

import { Table } from '../components/Table';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ organ }: StoreState) {
  return {
    organ,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Table);
