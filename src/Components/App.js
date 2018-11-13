import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Writers from "./Writers/Index";
import { NotFound } from "./Errors";

class App extends Component {
  state = {
    writers: []
  };

  async componentDidMount() {
    const writers = await (await fetch(
      "http://localhost:3004/writers?_embed=texts"
    )).json();
    console.log(writers);
    this.setState({ writers });
  }

  render() {
    const { writers } = this.state;
    return (
      <Router>
        <Fragment>
          <h1>React Router v4 Tutorial </h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/writers">Writers</Link>
            </li>
          </ul>

          <hr />
          <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route
              path="/writers"
              render={props => <Writers {...props} writers={writers} />}
            />
            <Route render={() => <NotFound />} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
