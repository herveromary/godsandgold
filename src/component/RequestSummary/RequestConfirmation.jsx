import React from "react";
import RecapCard from "../../Reusable/RecapCard";
import "../../styles/css/RequestConfirmation.css";

const RequestConfirmation = ({ state }) => {
  let userName = localStorage.getItem("user").login;

  return (
    <div className="confirm">
      <h2 className="chooseRequest-title">Confirmation</h2>
      <p className="textConfirmation">{`Hi ${userName}, your request was submitted ✅`}</p>
      <RecapCard details={state} />
    </div>
  );
};

export default RequestConfirmation;
