import React from "react";

import "./collection.styles.scss";

const collectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return (
    <div className="collection">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

export default collectionPage;
