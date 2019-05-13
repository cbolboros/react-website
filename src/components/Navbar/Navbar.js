import React, { Component } from "react";
import { Link } from "./Link";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { press } = this.props;
    return (
      <nav className="navbar" onClick={press}>
        <Link className="fa fa-home home active" />
        <Link className="fa fa-keyboard projects" />
        <Link className="fa fa-coffee timeline" />
      </nav>
    );
  }
}

export default Navbar;
