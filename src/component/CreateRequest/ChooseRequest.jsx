import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/css/ChooseRequest.css";
import Topbar from "../../Reusable/Topbar";
import BottomNav from "../../Reusable/BottomNav";

const ChooseRequest = () => {
  const [request, setrequest] = useState();
  let history = useHistory();

  const handleOnChange = (e) => {
    setrequest(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("request", request);
    history.push("/chooseoffering");
  };

  return (
    <div className="choose-request-global">
      <Topbar />
      <div className="ChooseRequest">
        <h2 className="chooseRequest-title">Create request</h2>
        <div className="desktop-responsive-flexbox">
          <div className="desktop-responsive-form">
            <form className="chooseRequest-form" onSubmit={handleOnSubmit}>
              <textarea
                type="text"
                name="requestChoice"
                id="requestChoice"
                value={request}
                onChange={handleOnChange}
                required
              />
              <button type="submit">Confirm</button>
            </form>
          </div>
          <div className="diagram-box">
            <h3 className="mostCommonRequests-title">Most common requests :</h3>
            <div class="diagram-bar">
              <div class="diagram-1">
                <span class="request">
                  <p className="diagram-text">I want my wife back!</p>
                </span>
                <span class="PercentText ">90%</span>
              </div>
            </div>
            <div class="diagram-bar">
              <div class="diagram-2">
                <span class="request">
                  <p className="diagram-text">I want my wife out!</p>
                </span>
                <span class="PercentText ">69%</span>
              </div>
            </div>
            <div class="diagram-bar">
              <div class="diagram-3">
                <span class="request">
                  <p className="diagram-text">Be wealthy!</p>
                </span>
                <span class="PercentText ">62%</span>
              </div>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default ChooseRequest;
