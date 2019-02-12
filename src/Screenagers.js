import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router";

import "./style/main.css";
import FormScreenagers from "./FormScreenagers";

class Screenagers extends Component {
  render() {
    return (
      <div className="Retreat">
        <header>
          <img id="logo" src={require("./img/ipc.png")} alt="logo" />
          <Typography variant="headline" color="inherit" align="center">
            Screenagers Film
          </Typography>
          <Typography variant="body1" color="inherit" align="left">
            Sign up page for the Screenagers Film
            <br />
            <br />
            Time
            <br />
            April 5
            <br />
            Methodist Church
          </Typography>
        </header>
        <FormScreenagers />
      </div>
    );
  }
}

export default Screenagers;
