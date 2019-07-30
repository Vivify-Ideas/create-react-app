import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import { logout } from 'containers/App/actions';

import AppBar from './AppBar';

const mapDispatchToProps = {
  logout,
  push
};

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(withConnect)(AppBar);
