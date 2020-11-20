import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/css/RequestStatus.css";

const RequestStatus = () => {
  const [approved, setApproved] = useState(false);

  const history = useHistory();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    history.push("/choosegod");
  };

  return (
    <div className="globalStatus">
      <h2>Status</h2>
      <div>
        <p className={approved ? "status-approved" : "status-declined"}>
          {approved ? "Approved" : "Declined"}
        </p>
      </div>
      <form onSubmit={handleOnSubmit}>
        <button className="buttonStatus" type="submit">
          New Request
        </button>
      </form>
    </div>
  );
};

export default RequestStatus;
