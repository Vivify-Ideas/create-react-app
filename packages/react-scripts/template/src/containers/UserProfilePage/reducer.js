import produce from 'immer';

import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR
} from './actions';

export const initialState = {
  isUpdateUserPending: false
};

/* eslint-disable default-case */
const userProfileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        draft.isUpdateUserPending = true;
        break;
      case UPDATE_USER_SUCCESS:
      case UPDATE_USER_ERROR:
        draft.isUpdateUserPending = false;
        break;
    }
  });

export default userProfileReducer;
