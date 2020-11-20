import React from "react";
import RecapCard from "../../Reusable/RecapCard";
import "../../styles/css/RequestConfirmation.css";
import Topbar from "../../Reusable/Topbar";

const RequestConfirmation = ({ state }) => {
  return (
    <div className="confirm">
      <Topbar />
      <h2>Confirmation</h2>
      <RecapCard details={state} />
    </div>
  );
};

export default RequestConfirmation;
