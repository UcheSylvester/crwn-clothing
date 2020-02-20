import { takeLatest, all, call, put } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInFailure
} from "./user.action";

export function* onGoogleSignInSuccess() {
  try {
    // call the auth function for signing in with googleProvider
    // run the user through the createUserProfileDocument function to create a new user
    // if user does not exist or sign the user in if they exists
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);

    // getting the usersnapshot from the userRef doc
    const userSnapshot = yield userRef.get();

    // putting (dispatching) the user id and data got
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

// when the GOOGLE_SIGN_IN_START action is triggered (user clicks on the sign in with google button)
export function* onGoogleSignInStart() {
  // yield the onGoogleSignInSuccess action which takes charge of sending request for
  // signing user in, setting the user and firing the googleSignInError for any error
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignInSuccess);
}

// For email sign in actions
export function* onEmailSignInSuccess({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);

    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield console.log(" hello");
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, onEmailSignInSuccess);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
