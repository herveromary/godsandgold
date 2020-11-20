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
    </div>
  );
};

export default RequestSummary;
