import { all, call } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/shop.sagas";

// the rootSaga for adding and calling all sagas once our app initializes
// using the all effect
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
