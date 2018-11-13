import React, { Fragment } from "react";

const Text = ({ title, published, description }) => (
  <Fragment>
    <h4>
      {title}
      {published ? ` (${published}) ` : null}
    </h4>
    <p>{description ? description : <i>No Description</i>}</p>
  </Fragment>
);

export default Text;
