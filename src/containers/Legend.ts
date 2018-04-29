import { connect } from 'react-redux';

import { Legend } from '../components/Legend';
import { StoreState } from '../types/StoreState';

function mapStateToProps({ organ }: StoreState) {
  return {
    stopName: organ.stops.first()!.name,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Legend);
