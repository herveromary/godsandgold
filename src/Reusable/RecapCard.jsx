import React from "react";

const RecapCard = ({ details }) => {
  return (
    <div className="textsChoosePickUp">
      <p>God: {details.god}</p>
      <p>Request: {details.request}</p>
      <p>Offering: {details.offering}</p>
      {details.date && (
        <p>
          Pick-up time: <span className="textPickUpDate">{details.date}</span>
        </p>
      )}
      <p>Address: {details.address}</p>
    </div>
  );
};

export default RecapCard;
