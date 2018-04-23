import { connect } from 'react-redux';

import { Setzer } from '../components/Setzer';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ }: StoreState) {
  return {
  };
}

export default connect(
  mapStateToProps,
  null,
)(Setzer);
