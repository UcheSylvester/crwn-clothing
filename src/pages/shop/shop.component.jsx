import React from "react";

import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.action";

import "./shop.styles.scss";
import { connect } from "react-redux";

class ShopPage extends React.Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      if (snapshot.empty) return;

      // console.log(snapshot);

      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      const { updateCollections } = this.props;

      updateCollections(collectionsMap);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromSnapshot();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />

        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispathToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispathToProps)(ShopPage);
