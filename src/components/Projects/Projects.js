import React, { Component } from "react";
import ProjectSuperhero from "./Project-Superhero/ProjectSuperhero";
import { ReactComponent as Close } from "../../images/close.svg";
import Button from "@material-ui/core/Button";

import "./Projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      project: null
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
            <Button onClick={this.showHero.bind(this)} className="project-show" size="small" variant="contained" color="primary">
              Demo
            </Button>
            <ul className="project-resources">
              <li>Superhero API</li>
            </ul>
          </div>
        </div>
        <div className="project">
          <div className="project-image" />
          <div className="project-description">
            <p className="project-title">GEO</p>
            <p className="project-info">A simple API that get's information about searched hero(s).</p>
            <Button onClick={this.showGeo.bind(this)} className="project-show" size="small" variant="contained" color="primary">
              Demo
            </Button>
            <ul className="project-resources">
              <li>JS</li>
            </ul>
          </div>
        </div>
        <ProjectSuperhero showMe={this.state.project} />
        <Close className={"close-btn " + (this.state.project ? "" : "hide")} onClick={this.closeProject.bind(this)} />
      </div>
    );
  }

  showGeo() {
    this.setState({ project: "geo" });
  }

  showHero() {
    this.setState({ project: "hero" });
  }

  closeProject() {
    this.setState({ project: null, close: true });
  }
}

export default Projects;
