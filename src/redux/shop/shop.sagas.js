import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import ShopActionTypes from "./shop.types";
import { fetchCollectionSuccess, fetchCollectionsFailure } from "./shop.action";

// Generator functions are functions that runs in async format,
// yeilding  values from an async actions wherever yeild keyword is used
export function* fetchCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");

    // yeilding the value that comes from calling get on the collectionRef
    const snapshot = yield collectionRef.get();

    // converting the snapshot to collectionsMap, by passing the converCollectionsSnapshopToMap
    // and the snapshot(to be converted) into the call effect (from redux saga) so can be be able
    // to wait and yeild the value incase it takes longer (asynchronous)
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // dispatching the fetchCollectionSuccess actions using the put effect from redux saga
    // passing in the collectionsMap as payload and yielding the value
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    //
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
