import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import RegisterPage from './RegisterPage';

import { makeSelectIsRegisterPending } from './selectors';
import { register } from './actions';

const mapStateToProps = createStructuredSelector({
  isRegisterPending: makeSelectIsRegisterPending()
});

const mapDispatchToProps = {
  register
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(RegisterPage);
