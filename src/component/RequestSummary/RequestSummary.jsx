import React from "react";
import RequestConfirmation from "./RequestConfirmation";
import RequestStatus from "./RequestStatus";

const RequestSummary = ({ location }) => {
  const state = location.state;

  return (
    <div>
      <RequestConfirmation state={state} />
      <RequestStatus />
    </div>
  );
};

export default RequestSummary;
