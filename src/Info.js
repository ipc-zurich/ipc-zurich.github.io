import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import Adult from "./Adult";

// For flux
import * as Actions from "./Actions/Actions.js";
import Store from "./Stores/Store.js";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Store.getDate(),
      accomodation: Store.getAccomodation(),
      adults: Store.getAdults(),
      prices: Store.getMealPrices(),
      textFriSun: Store.getDateTextFriSun(),
      textSatSun: Store.getDateTextSatSun()
    };

    this.dateChanged = this.dateChanged.bind(this);
    this.accomodationChanged = this.accomodationChanged.bind(this);
    this.updateAdults = this.updateAdults.bind(this);
  }

  // Bind change listener
  componentWillMount() {
    Store.on("Date_changed", this.dateChanged);
    Store.on("Accomodation_changed", this.accomodationChanged);
    Store.on("Adults_changed", this.updateAdults);
  }

  // Unbind change listener
  componentWillUnmount() {
    Store.removeListener("Date_changed", this.dateChanged);
    Store.removeListener("Accomodation_changed", this.accomodationChanged);
    Store.removeListener("Adults_changed", this.updateAdults);
  }

  accomodationChanged() {
    this.setState({
      accomodation: Store.getAccomodation(),
      textFriSun: Store.getDateTextFriSun(),
      textSatSun: Store.getDateTextSatSun()
    });
  }

  updateAdults() {
    console.log(Store.getAdults());
    this.setState({
      adults: Store.getAdults()
    });
  }

  addAdults() {
    Actions.addAdult();
  }

  handleChange = val => event => {
    Actions.setInfo(val, event.target.value);
  };

  handleAccomodationChange = event => {
    Actions.setAccomodation(event.target.value);
  };

  handleDateChange = event => {
    Actions.setDate(event.target.value);
  };

  dateChanged() {
    this.setState({
      date: Store.getDate()
    });
  }

  render() {
    const { showRoom } = this.state;
    return (
      <div className="container">
        <Typography variant="title" color="inherit" align="left">
          Registration
        </Typography>
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
          name="address"
          label="Address"
          className="textField"
          onChange={this.handleChange("address")}
          margin="normal"
        />
        <div>
          <div>
            {this.state.adults.map(adult => (
              <Adult key={adult.key} number={adult.key} name={adult.name} />
            ))}

            <Button
              variant="contained"
              className="button"
              onClick={this.addAdults}
            >
              <Icon>add</Icon>Add Adult
            </Button>
          </div>
          <FormControl className="container subcontainer" component="fieldset">
            <Typography variant="title" color="inherit" align="left">
              Accommodation
            </Typography>
            <RadioGroup
              aria-label="ACCOMODATION"
              name="accomodation"
              className="radioGroup"
              value={this.state.accomodation}
              onChange={this.handleAccomodationChange}
              align="left"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel
                value="mealsOnly"
                control={<Radio />}
                label="Meals only"
              />
            </RadioGroup>
          </FormControl>

          <FormControl className="container subcontainer" component="fieldset">
            <Typography variant="title" color="inherit" align="left">
              Dates
            </Typography>
            <RadioGroup
              aria-label="Date"
              name="date"
              value={this.state.date}
              onChange={this.handleDateChange}
              align="left"
            >
              <FormControlLabel
                value="friSun"
                control={<Radio />}
                label={"Friday - Sunday " + this.state.textFriSun}
              />

              <FormControlLabel
                value="satSun"
                control={<Radio />}
                label={"Saturday - Sunday" + this.state.textSatSun}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Info;
