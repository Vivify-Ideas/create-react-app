import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ForgotPasswordPage from './ForgotPasswordPage';

import { makeSelectIsForgotPasswordPending } from './selectors';
import { forgotPassword } from './actions';

const mapStateToProps = createStructuredSelector({
  isForgotPasswordPending: makeSelectIsForgotPasswordPending()
});

const mapDispatchToProps = {
  forgotPassword
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ForgotPasswordPage);
