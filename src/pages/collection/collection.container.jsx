import { compose } from "redux";

import { connect } from "react-redux";

import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";

const mapStateToProps = state => ({
  isLoading: !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
