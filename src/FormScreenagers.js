import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// For flux
import * as Actions from "./Actions/Actions.js";
import Store from "./Stores/Store.js";

const styles = theme => ({ button: { height: 40, width: 100 } });

class FormScreenagers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = val => event => {
    Actions.setInfo(val, event.target.value);
  };

  render() {
    return (
      <div className="container">
        <form action="https://formspree.io/office@ipc-zurich.org" method="POST">
          <div className="container">
            <TextField
              name="name"
              label="First Name"
              className="textField"
              onChange={this.handleChange("name")}
              margin="normal"
            />
            <TextField
              name="surname"
              label="Family Name"
              className="textField"
              onChange={this.handleChange("surname")}
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              className="textField"
              onChange={this.handleChange("email")}
              margin="normal"
            />

            <TextField
              name="number"
              label="Phone Number"
              className="textField"
              onChange={this.handleChange("number")}
              margin="normal"
            />
            <TextField
              name="numberOfPeople"
              label="Number of People"
              className="textField"
              onChange={this.handleChange("numberOfPeople")}
              margin="normal"
            />
          </div>
          <Button
            variant="contained"
            className="button"
            align="bottom"
            type="submit"
          >
            Send <Icon>send</Icon>
          </Button>
        </form>
      </div>
    );
  }
}

export default FormScreenagers;
