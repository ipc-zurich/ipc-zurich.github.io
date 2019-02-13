import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router";

import "./style/main.css";
import FormScreenagers from "./FormScreenagers";

class Screenagers extends Component {
  render() {
    return (
      <div id="screenagers">
        <header>
          <img id="logo" src={require("./img/ipc.png")} alt="logo" />
          <Typography variant="display2" color="inherit" align="center">
            Sign up Screenagers Film
          </Typography>
          <Typography variant="title" color="inherit" align="left">
            Where:
          </Typography>
          <Typography variant="body1" color="inherit" align="left">
            Evangelische-methodistische Kirche Zürich Ost
            <br />
            Zentrum Zelthof
            <br />
            (Methodist Hall)
            <br />
            Zeltweg 20
            <br />
            8032 Zürich
          </Typography>
          <Typography variant="title" color="inherit" align="left">
            When:
          </Typography>
          <Typography variant="body1" color="inherit" align="left">
            to be confirmed
          </Typography>
        </header>
        <FormScreenagers />
      </div>
    );
  }
}

export default Screenagers;
