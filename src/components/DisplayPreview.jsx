import React from "react";
import DisplayTile from "./DisplayTile";

const DisplayPreview = ({ searchterm, paid }) => (
  <div>
    {!searchterm
      ? paid.map((paid) => (
          <DisplayTile
            name={paid.confName}
            poster={paid.imageURL}
            date={paid.confStartDate}
            type={paid.entryType}
            place={paid.venue}
            confurl={paid.confUrl}
          />
        ))
      : paid.map((paid) =>
          searchterm.toLowerCase() === paid.confName.toLowerCase() ||
          searchterm.toLowerCase() === paid.city.toLowerCase() ? (
            <DisplayTile
              name={paid.confName}
              poster={paid.imageURL}
              date={paid.confStartDate}
              type={paid.entryType}
              place={paid.venue}
              confurl={paid.confUrl}
            />
          ) : null
        )}
  </div>
);

export default DisplayPreview;
