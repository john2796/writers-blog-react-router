import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import { NotFound } from "../../Errors";
import Text from "./Text";

const Writer = ({
  match: { url },
  name,
  description,
  image,
  born,
  deceased,
  texts
}) => {
  return (
    <Fragment>
      <img src={image} alt="..." style={{ width: 300 }} />
      <h1>{name}</h1>
      <h3>
        {born} &mdash; {deceased}
      </h3>
      <p>{description}</p>
      <ul>
        {texts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`${url}/texts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      {/* Nested Routes  */}
      <Route
        path={`${url}/texts/:textId`}
        render={props => {
          const text = texts.find(({ id }) => id === props.match.params.textId);
          if (!text) {
            return <NotFound />;
          }
          return <Text {...text} />;
        }}
      />
    </Fragment>
  );
};

export default Writer;
