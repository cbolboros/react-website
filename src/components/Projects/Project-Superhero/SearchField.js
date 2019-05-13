import React, { Component } from "react";
// import { ReactComponent as SearchIcon } from "./Search.svg";
import "./SearchField.css";

class SearchField extends Component {
  render() {
    const { handleChange, searching, firstSearch } = this.props;
    return (
      <div className={"form" + (firstSearch ? " firstTime" : "")}>
        <input placeholder="E.G. Superman, Thor" type="search" onKeyDown={handleChange} />
        {/* <SearchIcon /> */}
        <i className={"searchField fa fa-search" + (searching ? " hide" : "")} />
        <i className={"searchField fa fa-spinner" + (!searching ? " hide" : " spin")} />
      </div>
    );
  }
}

export default SearchField;
