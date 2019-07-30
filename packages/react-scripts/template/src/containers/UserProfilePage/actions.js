export const USER_PROFILE = '[User Profile]';

export const UPDATE_USER_REQUEST = `${USER_PROFILE} UPDATE_USER_REQUEST`;
export const UPDATE_USER_SUCCESS = `${USER_PROFILE} UPDATE_USER_SUCCESS`;
export const UPDATE_USER_ERROR = `${USER_PROFILE} UPDATE_USER_ERROR`;

export function updateUser(firstName, lastName, avatar, setErrors) {
  return {
    type: UPDATE_USER_REQUEST,
    firstName,
    lastName,
    avatar,
    meta: {
      setErrors
    }
  };
}

export function updateUserSuccess() {
  return {
    type: UPDATE_USER_SUCCESS
  };
}

export function updateUserError(error) {
  return {
    type: UPDATE_USER_ERROR,
    error
  };
}
