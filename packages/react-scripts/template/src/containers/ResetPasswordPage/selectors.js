import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectResetPassword = state => state.resetPassword || initialState;

const makeSelectIsResetPasswordPending = () =>
  createSelector(
    selectResetPassword,
    substate => substate.isResetPasswordPending
  );

export { makeSelectIsResetPasswordPending };
