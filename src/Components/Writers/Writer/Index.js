import React, { Fragment } from "react";

const Writer = ({ name, description, image, born, deceased }) => {
  return (
    <Fragment>
      <div>
        <img src={image} alt="..." style={{ width: 300 }} />
        <h1>{name}</h1>
        <h3>
          {born} &mdash; {deceased}
        </h3>
        <p>{description}</p>
      </div>
    </Fragment>
  );
};

export default Writer;
