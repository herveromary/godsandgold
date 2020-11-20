import React from "react";

const RecapCard = ({ details }) => {
  let godDetails = localStorage.getItem("choosenGod");
  godDetails = JSON.parse(godDetails);
  let godName = godDetails.name;

  const request = localStorage.getItem("request");

  return (
    <div className='textsChoosePickUp'>
      <p>God: {godName}</p>
      <p>Request: {request}</p>
      <p>Offering: {details.offering}</p>
      {details.date && (
        <p>
          Pick-up time: <span className='textPickUpDate'>{details.date}</span>
        </p>
      )}
      <p>Address: {details.address}</p>
    </div>
  );
};

export default RecapCard;
