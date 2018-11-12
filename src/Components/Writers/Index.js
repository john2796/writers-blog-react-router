import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Writers = ({ writers }) => (
  <Fragment>
    <ul>
      {writers.map(({ id, name }) => (
        <li key={id}>
          <Link to="name">{name}</Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Writers;
