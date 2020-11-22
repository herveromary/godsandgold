import React from "react";
import RequestConfirmation from "./RequestConfirmation";
import RequestStatus from "./RequestStatus";
import Topbar from "../../Reusable/Topbar";

const RequestSummary = ({ location }) => {
  const state = location.state;

  return (
    <div>
      <Topbar />
      <RequestConfirmation state={state} />
      <RequestStatus />
      <p className="thanks-text">Merci de votre visite!</p>
    </div>
  );
};

export default RequestSummary;
