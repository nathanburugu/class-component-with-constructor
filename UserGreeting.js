/** @format */

import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Nate</div>;
    } else {
      return <div>Welcome Nate Burugu</div>;
    }
  }
}

export default UserGreeting;
