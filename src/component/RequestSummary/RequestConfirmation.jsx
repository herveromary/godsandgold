import React from "react";
import RecapCard from "../../Reusable/RecapCard";
import "../../styles/css/RequestConfirmation.css";
import Topbar from "../../Reusable/Topbar";

const RequestConfirmation = ({ state }) => {
  let userName = localStorage.getItem("user");

  return (
    <div className="confirm">
      <h2>Confirmation</h2>
      <p className="textConfirmation">{`Hi ${userName}, your request was submitted ✅`}</p>
      <RecapCard details={state} />
    </div>
  );
};

export default RequestConfirmation;
