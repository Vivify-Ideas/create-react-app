import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectIsAuthenticated } from 'containers/App/selectors';

import PublicRoute from './PublicRoute';

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeSelectIsAuthenticated()
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PublicRoute);
