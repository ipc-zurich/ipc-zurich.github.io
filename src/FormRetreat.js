import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

// For flux
import * as Actions from "./Actions/Actions.js";
import Store from "./Stores/Store.js";

import Info from "./Info";
import Room from "./Room";
import Kids from "./Kids";

const styles = theme => ({ button: { height: 40, width: 100 } });

class FormRetreat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Store.getDate(),
      showRoom: Store.getShowRoom(),
      accomodation: Store.getAccomodation(),
      total: Store.getTotal()
    };
    this.dateChanged = this.dateChanged.bind(this);
    this.totalChanged = this.totalChanged.bind(this);
    this.accomodationChanged = this.accomodationChanged.bind(this);
  }

  // Bind change listener
  componentWillMount() {
    Store.on("Date_changed", this.dateChanged);
    Store.on("Total_changed", this.totalChanged);
    Store.on("Accomodation_changed", this.accomodationChanged);
  }

  // Unbind change listener
  componentWillUnmount() {
    Store.removeListener("Date_changed", this.dateChanged);
    Store.removeListener("Total_changed", this.totalChanged);
    Store.removeListener("Accomodation_changed", this.accomodationChanged);
  }

  dateChanged() {
    this.setState({
      date: Store.getDate()
    });
  }

  accomodationChanged() {
    this.setState({
      accomodation: Store.getAccomodation(),
      showRoom: Store.getShowRoom()
    });
  }

  totalChanged() {
    this.setState({
      total: Store.getTotal()
    });
  }
  handleChange = val => event => {
    Actions.setInfo(val, event.target.value);
  };

  render() {
    const { showRoom } = this.state;
    return (
      <div className="container">
        <form action="https://formspree.io/office@ipc-zurich.org" method="POST">
          <Info />
          {showRoom && <Room />}
          <Kids />
          <div className="container">
            <Typography variant="title" color="inherit" align="left">
              Comments
            </Typography>
            <Typography variant="body1" color="inherit" align="left">
              Please indicate if you wish to share a room with someone else.{" "}
              <br /> Any dietary restrictions.
            </Typography>
            <TextField
              name="comment"
              placeholder="Comments"
              multiline
              className="textField"
              onChange={this.handleChange("number")}
              margin="normal"
            />
          </div>
          <div className="container">
            <Typography variant="title" color="inherit" align="left">
              Total: CHF {this.state.total}.00
            </Typography>

            <TextField
              name="total"
              className="hiddenTextField"
              value={this.state.total}
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

export default FormRetreat;
