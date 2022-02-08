import React, {Component} from "react"
import {setupReduxConnection} from "../redux";

class Test extends Component {
  render() {
    console.log("Redux", this.props);

    return (
      <div>
        Hello
      </div>
    );
  }
}

export default setupReduxConnection(["test"])(Test);
