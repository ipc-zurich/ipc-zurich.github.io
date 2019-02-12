import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import "./style/main.css";
class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <header>
          <img id="logo" src={require("./img/ipc.png")} alt="logo" />
          <Typography variant="headline" color="inherit" align="center">
            An Overview of the different IPC Forms
          </Typography>
        </header>
        <ul>
          <li>
            <Link to={"/retreat"}>IPC Retreat</Link>
          </li>
          <li>
            <Link to={"/screenagers"}>Screenagers Film</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Overview;
