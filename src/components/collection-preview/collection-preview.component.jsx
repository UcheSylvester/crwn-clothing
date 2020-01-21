import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

// This is each collection in the shop page
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {/* filtering to show only 4 times */}
      {items
        .filter((item, index) => index < 4)
        .map(({ id, ...otherCollectionProps }) => (
          // <div key={item.id}>{item.name}</div>
          <CollectionItem key={id} {...otherCollectionProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
