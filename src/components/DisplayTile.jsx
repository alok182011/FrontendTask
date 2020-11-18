import React from "react";

import "./DisplayTileStyle.css";

const DisplayTile = ({ name, poster, date, type, place, confurl }) => (
  <div className="displaytile-container">
    <div className="displaytile-text">
      <h3 className="displaytile-title">{name}</h3>
      <h4>{date}</h4>
      <h4>Venue: {place}</h4>
      <h4>Entry Type: {type}</h4>
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
