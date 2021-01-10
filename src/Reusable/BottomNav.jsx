import React, { useContext } from "react";
import StepContext from "../StepContext";
import { NavLink } from "react-router-dom";

import "../styles/css/BottomNav.css";

const BottomNav = ({ path }) => {
  const { stepRequest } = useContext(StepContext);
  return (
    <div className="fullBar">
      <NavLink
        to={(path = "/choosegod")}
        className="tab"
        activeClassName="validTab"
      >
        {" "}
        <p className="tab-text">God</p>{" "}
      </NavLink>
      {stepRequest.stepOne ? (
        <NavLink
          to={(path = "/chooserequest")}
          className="tab"
          activeClassName="validTab"
        >
          {" "}
          <p className="tab-text">Request</p>{" "}
        </NavLink>
      ) : (
        <div className="tab-inactive">
          <p className="tab-text">Request</p>
        </div>
      )}
      {stepRequest.stepTwo ? (
        <NavLink
          to={(path = "/chooserequest")}
          className="tab"
          activeClassName="validTab"
        >
          {" "}
          <p className="tab-text">Offering</p>{" "}
        </NavLink>
      ) : (
        <div className="tab-inactive">
          <p className="tab-text">Offering</p>
        </div>
      )}
      {stepRequest.stepThree ? (
        <NavLink
          to={(path = "/chooserequest")}
          className="tab"
          activeClassName="validTab"
        >
          {" "}
          <p className="tab-text">Pick-Up</p>{" "}
        </NavLink>
      ) : (
        <div className="tab-inactive">
          <p className="tab-text">Pick-Up</p>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
