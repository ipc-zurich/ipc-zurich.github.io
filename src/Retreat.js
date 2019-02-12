import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router";

import "./style/main.css";
import FormRetreat from "./FormRetreat";

class Retreat extends Component {
  render() {
    return (
      <div className="Retreat">
        <header>
          <img id="logo" src={require("./img/ipc.png")} alt="logo" />
          <Typography variant="headline" color="inherit" align="center">
            IPC All-Church Retreat (September 28-30)
          </Typography>

          <Typography variant="body1" color="inherit" align="left">
            Room reservation is on a first come first served basis.
            <br />
            Number of rooms in each category is limited and if category chosen
            is not available, an alternate will be reserved.
            <br />
            Please note that financial assistance is available if needed,
            contact the office.
            <br />
            <br />
            IPC office: 044 262 55 25 office@ipc-zurich.org
            <br />
            Bank details: UBS AG Zurich
            <br />
            IBAN No: CH34 0025 1251 8803 5701 C (send proof of payment)
            <br />
            Registration deadline is September 7.
            <br />
            Please pay at the church office, the retreat registration table at
            coffee hour or by bank transfer.
          </Typography>
        </header>
        <FormRetreat />
      </div>
    );
  }
}

export default Retreat;
