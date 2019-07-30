import { takeLatest, call, put } from 'redux-saga/effects';
import isNull from 'lodash/isNull';
import isObject from 'lodash/isObject';

import request from 'utils/request';
import parseApiErrorsToFormik from 'utils/parseApiErrorsToFormik';

import {
  UPDATE_USER_REQUEST,
  updateUserSuccess,
  updateUserError
} from './actions';

export function* updateUser({
  firstName,
  lastName,
  avatar,
  meta: { setErrors }
}) {
  try {
    const form = new FormData();

    form.append('first_name', firstName);
    form.append('last_name', lastName);

    if (!isNull(avatar) && isObject(avatar)) {
      form.append('avatar', avatar);
    }

    yield call(request, {
      url: '/user',
      method: 'post',
      data: form
    });

    yield put(updateUserSuccess());
  } catch (error) {
    if (error.status === 422) {
      yield call(setErrors, parseApiErrorsToFormik(error.data.errors));
    }

    yield put(updateUserError());
  }
}

export default function* userProfileSaga() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}
