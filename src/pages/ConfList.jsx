import React from "react";

import Conf_Data from "./Conf_Data";
import "./ConfListStyle.css";
import DisplayPreview from "../components/DisplayPreview";

class ConfList extends React.Component {
  constructor() {
    super();
    this.state = {
      Conf_Data: Conf_Data,
      searchterm: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchterm: e.target.value });
  };

  render() {
    return (
      <div className="conflist-container">
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search by name or city"
          className="conflist-searchbar"
        ></input>

        {!this.state.searchterm
          ? Conf_Data.map((paid) => <DisplayPreview {...paid} />)
          : Conf_Data.map((paid) => (
              <DisplayPreview searchterm={this.state.searchterm} {...paid} />
            ))}
      </div>
    );
  }
}

export default ConfList;
