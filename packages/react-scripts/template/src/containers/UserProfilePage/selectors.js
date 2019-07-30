import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectUserProfile = state => state.userProfile || initialState;

const makeSelectIsUpdateUserPending = () =>
  createSelector(
    selectUserProfile,
    substate => substate.isUpdateUserPending
  );

export { makeSelectIsUpdateUserPending };
