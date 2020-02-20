import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

// action for when network call for fetching collections starts
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// using redux-thunk to manage fetching of collections
// the fetchCollectionsStartAsync function return a function that gets dispatch
// and it dispatches the actions needed at each stage of the network call
export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");

    // dispatching the fetchCollectionStart action which swtiches the the isFetching
    //  in shop reducer to true;
    dispatch(fetchCollectionsStart());

    // using the get method from firebase
    collectionRef.get().then(
      snapshot => {
        if (snapshot.empty) return;

        // converting the returned snapshot to a collectionMap which is what we need it as
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

        // dispatch the fetchCollectionSuccess action once network call is successful
        dispatch(fetchCollectionSuccess(collectionsMap));

        // updateCollections(collectionsMap);
      },

      // dispatching errorMessage
      error => dispatch(fetchCollectionsFailure(error.errorMessage))
    );
  };
};
