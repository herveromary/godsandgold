import React from "react";
import RecapCard from "../../Reusable/RecapCard";
import "../../styles/css/RequestConfirmation.css";

const RequestConfirmation = ({ state }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      <RecapCard details={state} />
    </div>
  );
};

export default RequestConfirmation;
