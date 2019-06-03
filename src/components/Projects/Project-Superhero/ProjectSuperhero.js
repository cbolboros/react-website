import React, { Component } from "react";
import SearchField from "./SearchField";
import SuperheroCard from "./SuperheroCard";
import "./ProjectSuperhero.css";

export class ProjectSuperhero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SUPERHERO_API_URL: "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2562005373828338/search/",
      searchValue: "",
      searchResults: [],
      searching: false,
      firstSearch: true
    };
  }
  handleChange(event) {
    this.setState({ searchValue: event.target.value });
    if (event.key === "Enter" && event.target.value !== "") {
      this.getData(event.target.value);
      event.target.value = "";
    }
  }

  async getData(value) {
    this.setState({ searching: true, firstSearch: false });
    const URL = this.state.SUPERHERO_API_URL + value;
    const data = await fetch(URL).then(res => res.json());
    if (data.results === undefined) this.setState({ searchResults: [] });
    this.setState({ searching: false, searchResults: data.results });
    console.log(data.results);
  }

  renderSearchResults() {
    const results = this.state.searchResults;
    const heroes = results.map(hero => <SuperheroCard key={hero.id} heroData={hero} />);
    console.log(heroes);
  }

  render() {
    const { showMe } = this.props;
    return (
      <div className={"superherowrapper " + (showMe === "hero" ? "" : "hide")}>
        <div className="Superhero">
          <h1 className="title">Heroes</h1>
          <SearchField handleChange={this.handleChange.bind(this)} searching={this.state.searching} firstSearch={this.state.firstSearch} />
          <div className="Superhero-cards">
            {this.state.searchResults.map(hero => (
              <SuperheroCard key={hero.id} heroData={hero} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSuperhero;
