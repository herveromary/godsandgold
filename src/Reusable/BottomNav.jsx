import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/css/BottomNav.css";

const BottomNav = ({ path }) => {
  return (
    <div className="fullBar">
      <NavLink
        to={(path = "/choosegod")}
        className="tab"
        activeClassName="validTab">
        {" "}
        God{" "}
      </NavLink>
      <NavLink
        to={(path = "/chooserequest")}
        className="tab"
        activeClassName="validTab">
        {" "}
        Request{" "}
      </NavLink>
      <NavLink
        to={(path = "/chooseoffering")}
        className="tab"
        activeClassName="validTab">
        {" "}
        Offering{" "}
      </NavLink>
      <NavLink
        to={(path = "/choosepickup")}
        className="tab"
        activeClassName="validTab">
        {" "}
        Pick-up{" "}
      </NavLink>
    </div>
  );
};

export default BottomNav;
