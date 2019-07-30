import produce from 'immer';

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './actions';

export const initialState = {
  isLoginPending: false
};

/* eslint-disable default-case */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.isLoginPending = true;
        break;
      case LOGIN_SUCCESS:
      case LOGIN_ERROR:
        draft.isLoginPending = false;
        break;
    }
  });

export default loginReducer;
