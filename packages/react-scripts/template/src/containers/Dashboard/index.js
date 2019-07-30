import { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Dashboard from './Dashboard';

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Dashboard);
