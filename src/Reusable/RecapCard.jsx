import React from "react";

const RecapCard = ({ details }) => {
  let godDetails = localStorage.getItem("choosenGod");
  godDetails = JSON.parse(godDetails);
  let godName = godDetails.name;

  const request = localStorage.getItem("request");

  return (
    <div className="textsChoosePickUp">
      <h3 className="titleRecap">Recap</h3>
      <p>God: {godName}</p>
      <p>Request: {request}</p>
      <p>Offering: {details.offering}</p>
      {details.date && (
        <p>
          Pick-up time: <span className="textPickUpDate">{details.date}</span>
        </p>
      )}
      {details.address && <p>Address: {details.address}</p>}
    </div>
  );
};

export default RecapCard;
