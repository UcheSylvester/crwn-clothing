import React, { Component } from "react";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectShopCollections } from "../../redux/shop/shop.selector";

import "./shop.styles.scss";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  collections: selectShopCollections(state)
});

export default connect(mapStateToProps)(ShopPage);
