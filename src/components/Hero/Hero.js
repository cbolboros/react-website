import React, { Component } from "react";
import "./Hero.css";

export class Hero extends Component {
  constructor(props) {
    super(props);
    this.word = React.createRef();
    this.greet = React.createRef();
    this.counter = 0;
  }

  componentDidMount() {
    const div = this.word.current;
    const greet = this.greet.current;
    greet.classList.add("show");
    setInterval(() => {
      this.changeWord(div, this.counter);
    }, 4000);
  }

  changeWord = (div, counter) => {
    div.classList.add("reveal");
    const words = ["I'm Ciprian Bolboros", "I'm a full time Front-End Developer", "Thank you for stopping by"];
    if (counter === words.length) {
      this.counter = 0;
      counter = 0;
    }
    div.textContent = words[counter];
    this.counter++;
    setTimeout(function() {
      div.classList.remove("reveal");
    }, 3000);
  };

  render() {
    return (
      <div className="Hero" ref={this.greet}>
        Hi.
        <div className="word" ref={this.word} />
      </div>
    );
  }
}

export default Hero;
