import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Writers from "./Writers/Index";
import { NotFound } from "./Errors";
import Layout from "./Layout/Index";

class App extends Component {
  state = {
    writers: []
  };

  async componentDidMount() {
    const writers = await (await fetch(
      "http://localhost:3004/writers?_embed=texts"
    )).json();

    this.setState({ writers });
  }

  render() {
    const { writers } = this.state;
    return (
      <Router>
        <Fragment>
          <Layout writers={writers}>
            <Switch>
              <Route exact path="/" render={() => <div>Home</div>} />
              <Route
                path="/writers"
                render={props => <Writers {...props} writers={writers} />}
              />
              <Route render={() => <NotFound />} />
            </Switch>
          </Layout>
        </Fragment>
      </Router>
    );
  }
}

export default App;
