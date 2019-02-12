import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Route, Switch } from "react-router-dom";

import "./style/main.css";
import Retreat from "./Retreat";
import Overview from "./Overview";
import Screenagers from "./Screenagers";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/retreat" component={Retreat} />
        <Route path="/screenagers" component={Screenagers} />
      </Switch>
    );
  }
}

export default App;
