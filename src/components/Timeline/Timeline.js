import React, { Component } from "react";
import "./Timeline.css";

export class Timeline extends Component {
  render() {
    const { showMe } = this.props;
    return <div className={"page Timeline " + (showMe ? "front-page" : "")} />;
  }
}

export default Timeline;
