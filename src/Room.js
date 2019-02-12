import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

// For flux
import * as Actions from "./Actions/Actions.js";
import Store from "./Stores/Store.js";

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: Store.getRoom(),
      prices: Store.getRoomPrices()
    };

    this.roomChanged = this.roomChanged.bind(this);
    this.dateChanged = this.dateChanged.bind(this);
  }

  // Bind change listener
  componentWillMount() {
    Store.on("Room_changed", this.roomChanged);
    Store.on("Date_changed", this.dateChanged);
  }

  // Unbind change listener
  componentWillUnmount() {
    Store.removeListener("Room_changed", this.roomChanged);
    Store.on("Date_changed", this.dateChanged);
  }

  roomChanged() {
    this.setState({
      room: Store.getRoom()
    });
  }

  dateChanged() {
    this.setState({
      prices: Store.getRoomPrices()
    });
    console.log(this.state.prices.singleWcShower);
  }

  handleRadioChange = event => {
    Actions.setRoom(event.target.value);
  };

  render() {
    return (
      <div className="container">
        <Typography variant="title" color="inherit" align="left">
          Preferred Accommodation
        </Typography>

        <FormControl component="fieldset">
          <RadioGroup
            aria-label="Room"
            name="room"
            value={this.state.room}
            onChange={this.handleRadioChange}
            align="left"
          >
            <FormControlLabel
              value="singleWcShower"
              control={<Radio />}
              label={
                "Single room with WC/shower - " +
                "CHF " +
                this.state.prices.singleWcShower +
                ".00"
              }
            />
            <FormControlLabel
              value="singleWc"
              control={<Radio />}
              label={
                "Single room with WC only (shared shower) - " +
                "CHF " +
                this.state.prices.singleWc +
                ".00"
              }
            />
            <FormControlLabel
              value="single"
              control={<Radio />}
              label={
                "Single room with washbasin only (shared toilet and shower)  - " +
                "CHF " +
                this.state.prices.single +
                ".00"
              }
            />
            <FormControlLabel
              value="doubleWcShower"
              control={<Radio />}
              label={
                "Double room with WC/shower (2 adults sharing) - " +
                "CHF " +
                this.state.prices.doubleWcShower +
                ".00"
              }
            />
            <FormControlLabel
              value="double"
              control={<Radio />}
              label={
                "Double room with washbasin only (shared toilet and shower, 2 adults sharing) - " +
                "CHF " +
                this.state.prices.double +
                ".00"
              }
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

export default Room;
