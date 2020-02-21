import { takeLatest, all, call, put } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  auth,
  googleProvider,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import { signInSuccess, signInFailure } from "./user.action";

// A reusablable generator for getting snapShot from the userAuth ref
export function* getSnapshotFromUserAuth(userAuth) {
  try {
    // run the user through the createUserProfileDocument function to create a new user
    // if user does not exist or sign the user in if they exists
    const userRef = yield call(createUserProfileDocument, userAuth);

    // getting the usersnapshot from the userRef doc (userAuth)
    const userSnapshot = yield userRef.get();

    // putting (dispatching) the user id and data got
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    // call the auth function for signing in with googleProvider

    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// when the GOOGLE_SIGN_IN_START action is triggered (user clicks on the sign in with google button)
export function* onGoogleSignInStart() {
  // yield the onGoogleSignInSuccess action which takes charge of sending request for
  // signing user in, setting the user and firing the googleSignInError for any error
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// For email sign in actions
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
