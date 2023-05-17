import React, { Component } from "react";
import Calendar from "react-calendar";

export default class Picker extends Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => {
    this.setState({
      date: date,
    });
  };

  render() {
    return (
      <div>
        Picker
        <Calendar onChange={this.onChange} />
      </div>
    );
  }
}
