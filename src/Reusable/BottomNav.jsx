import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/css/BottomNav.css";

const BottomNav = ({ path }) => {
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
      <NavLink
        to={(path = "/chooserequest")}
        className="tab"
        activeClassName="validTab"
      >
        {" "}
        <p className="tab-text">Request</p>{" "}
      </NavLink>
      <NavLink
        to={(path = "/chooseoffering")}
        className="tab"
        activeClassName="validTab"
      >
        {" "}
        <p className="tab-text">Offering</p>{" "}
      </NavLink>
      <NavLink
        to={(path = "/choosepickup")}
        className="tab"
        activeClassName="validTab"
      >
        {" "}
        <p className="tab-text">Pick-up</p>{" "}
      </NavLink>
    </div>
  );
};

export default BottomNav;
