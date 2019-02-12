import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

// For flux
import * as Actions from "./Actions/Actions.js";
import Store from "./Stores/Store.js";

class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      babyPrice: Store.getBabyPrice(),
      youthPrice: Store.getYouthPrice(),
      childPrice: Store.getChildPrice()
    };
    this.handleRemoveButton = this.handleRemoveButton.bind(this);
    this.accomodationChanged = this.accomodationChanged.bind(this);
    this.dateChanged = this.dateChanged.bind(this);
  }

  // Bind change listener
  componentWillMount() {
    Store.on("Date_changed", this.dateChanged);
    Store.on("Accomodation_changed", this.accomodationChanged);
  }

  // Unbind change listener
  componentWillUnmount() {
    Store.removeListener("Date_changed", this.dateChanged);
    Store.removeListener("Accomodation_changed", this.accomodationChanged);
  }

  dateChanged() {
    console.log("date changed");
    this.setState({
      babyPrice: Store.getBabyPrice(),
      youthPrice: Store.getYouthPrice(),
      childPrice: Store.getChildPrice()
    });
  }

  accomodationChanged() {
    this.setState({
      babyPrice: Store.getBabyPrice(),
      youthPrice: Store.getYouthPrice(),
      childPrice: Store.getChildPrice()
    });
  }

  handleChangeName = event => {
    Actions.changeKid(this.props.number, this.props.age, event.target.value);
  };

  handleChangeAge = event => {
    console.log(event.target.value);
    Actions.changeKid(this.props.number, event.target.value, this.props.name);
  };

  handleRemoveButton() {
    console.log("Button Clicked " + this.props.number);
    Actions.removeKid(this.props.number);
  }

  render() {
    const { showRoom } = this.state;
    return (
      <div>
        <Select
          value={this.props.age}
          onChange={this.handleChangeAge}
          inputProps={{
            name: "age" + this.props.number
          }}
        >
          <MenuItem value={"baby"}>
            Babies (0-2)
            {" - CHF " + this.state.babyPrice + ".00"}
          </MenuItem>
          <MenuItem value={"child"}>
            Children (3-9)
            {" - CHF " + this.state.childPrice + ".00"}
          </MenuItem>
          <MenuItem value={"youth"}>
            Youth (10-17)
            {" - CHF " + this.state.youthPrice + ".00"}
          </MenuItem>
        </Select>
        <TextField
          name={"name" + this.props.number}
          label="Name"
          className="textField"
          onChange={this.handleChangeName}
          margin="normal"
        />
        <Typography id="dobLabel" variant="body1">
          Birthdate:
        </Typography>
        <TextField
          name={"birthdate" + this.props.number}
          className="textField"
          onChange={this.handleChangeName}
          margin="normal"
          type="date"
        />
        <Button
          variant="contained"
          className="button"
          onClick={this.handleRemoveButton}
          align="bottom"
        >
          <Icon>remove</Icon> Remove
        </Button>
      </div>
    );
  }
}

export default Kid;
