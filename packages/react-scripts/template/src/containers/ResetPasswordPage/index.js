import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import ResetPasswordPage from './ResetPasswordPage';

import { makeSelectIsResetPasswordPending } from './selectors';
import { resetPassword } from './actions';

const mapStateToProps = createStructuredSelector({
  isResetPasswordPending: makeSelectIsResetPasswordPending()
});

const mapDispatchToProps = {
  resetPassword
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ResetPasswordPage);
