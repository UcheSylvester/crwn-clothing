import { takeLatest, all, call, put } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import { googleSignInSuccess, googleSignInFailure } from "./user.action";

export function* onGoogleSignInSuccess() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignInSuccess);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}