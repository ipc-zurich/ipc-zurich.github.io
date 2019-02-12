import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import Kid from "./Kid";

// For flux
import * as Actions from "./Actions/Actions.js";
import Store from "./Stores/Store.js";

class Kids extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kids: Store.getKids()
    };

    this.updateKids = this.updateKids.bind(this);
  }

  // Bind change listener
  componentWillMount() {
    Store.on("Kids_changed", this.updateKids);
  }

  // Unbind change listener
  componentWillUnmount() {
    Store.removeListener("Kids_changed", this.updateKids);
  }

  updateKids() {
    this.setState({
      kis: Store.getKids()
    });
  }

  handleAddButton() {
    console.log("Button Clicked");
    Actions.addKid();
  }

  render() {
    return (
      <div className="container">
        <Typography variant="title" color="inherit" align="left">
          Kids
        </Typography>
        <Typography variant="body1" color="inherit" align="left">
          Please select using dropdown menu
        </Typography>

        {this.state.kids.map(kid => (
          <Kid key={kid.key} number={kid.key} age={kid.age} name={kid.name} />
        ))}

        <Button
          variant="contained"
          className="button"
          onClick={this.handleAddButton}
        >
          <Icon>add</Icon>Add
        </Button>
      </div>
    );
  }
}

export default Kids;
