import React from "react";

import "./DisplayTileStyle.css";

const DisplayTile = ({ name, poster, date, type, place, confurl }) => (
  <div className="displaytile-container">
    <div className="displaytile-text">
      <h3 className="displaytile-title">{name}</h3>
      <h5>{date}</h5>
      <h5>Venue: {place}</h5>
      <h5>Entry Type: {type}</h5>
      <h5>
        <a href={confurl} target="blank">
          Visit Conference Website
        </a>
      </h5>
    </div>
    <div className="displaytile-image">
      <img src={poster} alt="poster"></img>
    </div>
  </div>
);

export default DisplayTile;
