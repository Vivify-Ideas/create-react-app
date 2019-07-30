import produce from 'immer';

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actions';

export const initialState = {
  isLRegisterPending: false
};

/* eslint-disable default-case */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REGISTER_REQUEST:
        draft.isRegisterPending = true;
        break;
      case REGISTER_SUCCESS:
      case REGISTER_ERROR:
        draft.isRegisterPending = false;
        break;
    }
  });

export default registerReducer;
