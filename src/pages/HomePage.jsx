import React from "react";

import "./HomePageStyle.css";

class HomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="homepage-back">
        <div className="homepage-text">
          <h1 className="homepage-title">TechConf</h1>
          <p>
            Your one to go solution to find Tech Conferences around the World.
          </p>
          <br />
          <br />
          <br />
          <a className="homepage-link" href="/conflist">
            Explore All
          </a>
        </div>
      </div>
    );
  }
}

export default HomePage;
