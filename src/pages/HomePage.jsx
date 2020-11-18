import React from "react";
import { Link } from "react-router-dom";

import "./HomePageStyle.css";

class HomePage extends React.Component {
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
          <Link className="homepage-link" to="/conflist">
            Explore All
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
