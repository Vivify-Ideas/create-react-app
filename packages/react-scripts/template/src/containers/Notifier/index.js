import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withSnackbar } from 'notistack';

import Notifier from './Notifier';

import { makeSelectNotifications } from './selectors';
import { removeSnackbar } from './actions';

const mapStateToProps = createStructuredSelector({
  notifications: makeSelectNotifications()
});

const mapDispatchToProps = {
  removeSnackbar
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withSnackbar(compose(withConnect)(Notifier));
