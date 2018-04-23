import { connect } from 'react-redux';

import { Table } from '../components/Table';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ }: StoreState) {
  return {
  };
}

export default connect(
  mapStateToProps,
  null,
)(Table);
