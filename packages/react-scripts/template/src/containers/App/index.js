import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import App from './App';

import { makeSelectToken, makeSelectUser } from './selectors';
import { fetchAuthenticatedUser } from './actions';

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  user: makeSelectUser()
});

const mapDispatchToProps = {
  fetchAuthenticatedUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(App);
