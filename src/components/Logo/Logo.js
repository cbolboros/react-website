import React, { Component } from "react";
import { ReactComponent as LogoSVG } from "./logo.svg";
import "./logo.css";
import "./logo-animation.css";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.logoSVG = React.createRef();
  }

  componentDidMount() {
    this.addAnimation();
  }

  addAnimation() {
    const logoSVG = this.logoSVG.current;
    const svgPaths = logoSVG.childNodes;
    svgPaths[0].classList.add("line");
    svgPaths[1].classList.add("fill-orange");
    svgPaths[2].classList.add("fill-white");
  }

  render() {
    const { moveMe } = this.props;
    return <LogoSVG ref={this.logoSVG} className={moveMe ? "move" : ""} />;
  }
}

export default Logo;
