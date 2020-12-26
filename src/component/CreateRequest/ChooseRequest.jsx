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
    <div className='ChooseRequest'>
      <Topbar />
      <h2 className='chooseRequest-title'>Create request</h2>
      <form className='chooseRequest-form' onSubmit={handleOnSubmit}>
        <h3 className='chooseRequest-subtitle'>2 - Make your request</h3>
        <textarea
          type='text'
          name='requestChoice'
          id='requestChoice'
          value={request}
          onChange={handleOnChange}
          required
        />
        <button type='submit'>Confirm</button>
      </form>
      <h3 className='mostCommonRequests-title'>Most common requests :</h3>
      <div className='diagram-box'>
        <div class='diagram-bar'>
          <div class='diagram-1'>
            <span class='request'>'Not get back my wife'</span>
            <span class='PercentText '>90%</span>
          </div>
        </div>
        <div class='diagram-bar'>
          <div class='diagram-2'>
            <span class='request'>'Get back my wife'</span>
            <span class='PercentText '>69%</span>
          </div>
        </div>
        <div class='diagram-bar'>
          <div class='diagram-3'>
            <span class='request'>
              <em>'Find Stephan'</em>
            </span>
            <span class='PercentText '>62%</span>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ChooseRequest;
