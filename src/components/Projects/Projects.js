import React, { Component } from "react";
import ProjectSuperhero from "./Project-Superhero/ProjectSuperhero";
import { ReactComponent as Close } from "../../images/close.svg";
import Button from "@material-ui/core/Button";

import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false
    };
  }
  render(props) {
    const { showMe } = this.props;
    return (
      <div className={"page Projects " + (showMe ? "front-page" : "")}>
        <div className="project">
          <div className="project-image" />
          <div className="project-description">
            <p className="project-title">Superheroes</p>
            <p className="project-info">A simple API that get's information about searched hero(s).</p>
            <Button className="project-show" size="small" variant="contained" color="primary">
              Try
            </Button>
            <ul className="project-resources">
              <li>fetch API</li>
              <li>
                <a href="https://superheroapi.com/">Superhero API</a>
              </li>
            </ul>
          </div>
        </div>
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
