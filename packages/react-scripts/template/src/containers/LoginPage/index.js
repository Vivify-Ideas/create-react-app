import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import LoginPage from './LoginPage';

import { makeSelectIsLoginPending } from './selectors';
import { login } from './actions';

const mapStateToProps = createStructuredSelector({
  isLoginPending: makeSelectIsLoginPending()
});

const mapDispatchToProps = {
  login
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(LoginPage);
