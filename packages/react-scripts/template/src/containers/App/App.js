import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useInjectSaga } from 'utils/injectSaga';

import saga from './saga';

import Routes from './Routes';
import Notifier from 'containers/Notifier';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const key = 'app';

export default function App({ token, user, fetchAuthenticatedUser }) {
  useInjectSaga({ key, saga });

  const classes = useStyles();

  useEffect(() => {
    if (token) {
      fetchAuthenticatedUser();
    }
  }, [token, fetchAuthenticatedUser]);

  const renderLoadingIndicator = (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );

  return (
    <SnackbarProvider>
      <CssBaseline />
      <Helmet title="React Boilerplate" />
      {token && !user ? renderLoadingIndicator : <Routes />}
      <Notifier />
    </SnackbarProvider>
  );
}
