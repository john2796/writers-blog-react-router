import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Writers from "./Writers/Index";

class App extends Component {
  state = {
    writers: []
  };

  async componentDidMount() {
    const writers = await (await fetch("http://localhost:3004/writers")).json();
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

          <Route exact path="/" render={() => <div>Home</div>} />
          <Route
            path="/writers"
            render={props => <Writers {...props} writers={writers} />}
          />
        </Fragment>
      </Router>
    );
  }
}

export default App;
