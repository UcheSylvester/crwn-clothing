import React from "react";

import "./shop.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionOverview collections={collections} />
  </div>
);

export default ShopPage;
