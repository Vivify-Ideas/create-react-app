import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import UserProfilePage from './UserProfilePage';

import { makeSelectUser } from 'containers/App/selectors';
import { makeSelectIsUpdateUserPending } from './selectors';
import { updateUser } from './actions';

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
  isUpdateUserPending: makeSelectIsUpdateUserPending()
});

const mapDispatchToProps = {
  updateUser
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(UserProfilePage);
