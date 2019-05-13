import React, { Component } from "react";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProjects: null,
      isTimeline: null,
      isContact: null,
      moveLogo: null
    };
  }
  render() {
    return (
      <div className="App image-bg page">
        <Logo moveMe={this.state.moveLogo} />
        <Navbar press={this.handleLinkClick} />
        <Hero />
        <Projects showMe={this.state.isProjects} />
        <Timeline showMe={this.state.isTimeline} />
        <Contact showMe={this.state.isContact} />
      </div>
    );
  }
  handleLinkClick = event => {
    const navbar = event.target.parentNode;
    const target = event.target;
    if (target.nodeName !== "LI") return;
    else {
      navbar.querySelector(".active").classList.remove("active");
      target.classList.add("active");
    }
    this.setState({
      isProjects: target.classList.contains("projects"),
      isTimeline: target.classList.contains("timeline"),
      isContact: target.classList.contains("contact"),
      moveLogo: target.classList.contains("projects") || target.classList.contains("timeline") || target.classList.contains("contact")
    });
  };
}

export default App;
