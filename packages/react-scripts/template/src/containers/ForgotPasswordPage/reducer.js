import produce from 'immer';

import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR
} from './actions';

export const initialState = {
  isForgotPasswordPending: false
};

/* eslint-disable default-case */
const forgotPasswordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
        draft.isForgotPasswordPending = true;
        break;
      case FORGOT_PASSWORD_SUCCESS:
      case FORGOT_PASSWORD_ERROR:
        draft.isForgotPasswordPending = false;
        break;
    }
  });

export default forgotPasswordReducer;
