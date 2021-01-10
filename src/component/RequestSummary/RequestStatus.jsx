import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import "../../styles/css/RequestStatus.css";

const RequestStatus = () => {
  const [approved, setApproved] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [redirectLogin, setRedirectLogin] = useState(false);

  const history = useHistory();
  const chooseGod = () => {
    setRedirect(true);
  };
  const logOut = () => {
    setRedirectLogin(true);
  };

  return (
    <div className="globalStatus">
      <h2 className="request-status-title">Status</h2>
      <div>
        <p className={approved ? "status-approved" : "status-declined"}>
          {approved ? "Approved" : "Declined"}
        </p>
      </div>
      <form className="formStatus">
        <button
          type="button"
          onClick={() => chooseGod()}
          className="buttonStatus"
        >
          New Request
        </button>
        <button className="buttonStatus" type="button" onClick={() => logOut()}>
          Log Out
        </button>
        {redirectLogin && <Redirect to="/" />}
        {redirect && <Redirect to="/choosegod" />}
      </form>
    </div>
  );
};

export default RequestStatus;
