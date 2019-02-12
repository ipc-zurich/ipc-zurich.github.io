import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// For flux
import * as Actions from "./Actions/Actions.js";

class Adult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
  }

  handleChangeName = event => {
    Actions.changeAdult(this.props.number, event.target.value);
  };

  handleRemoveButton() {
    console.log("Button Clicked " + this.props.number);
    Actions.removeAdult(this.props.number);
  }

  render() {
    return (
      <div>
        <TextField
          name={"name" + this.props.number}
          label="Name"
          className="textField"
          onChange={this.handleChangeName}
          margin="normal"
        />
        <Button
          variant="contained"
          className="button"
          onClick={this.handleRemoveButton}
          align="bottom"
        >
          <Icon>remove</Icon>Remove Adult
        </Button>
      </div>
    );
  }
}

export default Adult;
