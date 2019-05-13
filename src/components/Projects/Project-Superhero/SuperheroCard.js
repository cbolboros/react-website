import React, { Component } from "react";
import { ReactComponent as DCComics } from "../../../images/DC.svg";
import { ReactComponent as MarvelComics } from "../../../images/Marvel.svg";
import "./SuperheroCard.css";

export class SuperheroCard extends Component {
  render() {
    const { heroData } = this.props;
    const backgroundImage = {
      backgroundImage: `url(${heroData.image.url})`
    };
    return (
      <div className="card">
        <div className="card-image" style={backgroundImage} />
        <h3 className="card-name">{heroData.name}</h3>
        <h5 className="card-full-name">{heroData.biography["full-name"]}</h5>
        {heroData.biography.publisher === "Marvel Comics" ? <MarvelComics /> : heroData.biography.publisher === "DC Comics" ? <DCComics /> : ""}
        <div className="powerstats">
          {heroData.powerstats.strength !== "null" ? (
            <i className="stats strength fa fa-fist-raised">
              <span>&nbsp;{heroData.powerstats.strength}</span>
            </i>
          ) : (
            ""
          )}
          {heroData.powerstats.intelligence !== "null" ? (
            <i className="stats intelligence fa fa-brain">
              <span>&nbsp;{heroData.powerstats.intelligence}</span>
            </i>
          ) : (
            ""
          )}
          {heroData.powerstats.speed !== "null" ? (
            <i className="stats speed fa fa-bolt">
              <span>&nbsp;{heroData.powerstats.speed}</span>
            </i>
          ) : (
            ""
          )}
        </div>

        {/* combat: "65" durability: "80" intelligence: "63" power: "45" speed: "45" strength: "32" */}
      </div>
    );
  }
}

export default SuperheroCard;
