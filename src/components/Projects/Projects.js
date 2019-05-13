import React, { Component } from "react";
import ProjectSuperhero from "./Project-Superhero/ProjectSuperhero";
import { ReactComponent as Close } from "../../images/close.svg";
import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false
    };
  }
  render() {
    const { showMe } = this.props;
    return (
      <div className={"page Projects " + (showMe ? "front-page" : "")}>
        <ProjectSuperhero closeMe={this.state.close} />
        <Close className={"close-btn " + (this.state.close ? "hide" : "")} onClick={this.closeProject.bind(this)} />
      </div>
    );
  }

  closeProject() {
    this.setState({ close: true });
  }
}

export default Projects;
