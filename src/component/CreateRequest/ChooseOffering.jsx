import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/css/ChooseOffering.css";

import fruit from "../../styles/fruits.png";
import animal from "../../styles/ewe.png";
import family from "../../styles/family.png";
import jewels from "../../styles/diamond.png";
import wine from "../../styles/barrel.png";
import coin from "../../styles/coins.png";

const ChooseOffering = ({ page, setPage, location }) => {
  const [offering, setOffering] = useState("");
  location = useLocation();
  console.log(location.pathname);

  return (
    <div className="offeringpage">
      <h2> What do you want to offer ? </h2>
      <div className="selectGift">
        <Link
          to={{
            pathname: `/choosepickup`,
            state: { offering: "a galleon of wine" },
          }}
          className="offerButton">
          <p> Galleon of wine</p>
          <img src={wine} alt="wine"></img>
        </Link>
        <Link
          to={{
            pathname: `/choosepickup`,
            state: { offering: "an animal for sacrifice" },
          }}
          className="offerButton">
          <p> Sacrificial Animal</p>
          <img src={animal} alt="animal"></img>
        </Link>
        <Link
          to={{
            pathname: `/choosepickup`,
            state: { offering: "a member of your family" },
          }}
          className="offerButton">
          <p> Family Member</p>
          <img src={family} alt="family"></img>
        </Link>
        <Link
          to={{
            pathname: `/choosepickup`,
            state: { offering: "an appetizing basket full of fruits" },
          }}
          className="offerButton">
          <p> Fruit basket</p>
          <img src={fruit} alt="fruits"></img>
        </Link>
        <Link
          to={{ pathname: `/choosepickup`, state: { offering: "money" } }}
          className="offerButton">
          <p> Oboli</p>
          <img src={coin} alt="coins"></img>
        </Link>
        <Link
          to={{
            pathname: `/choosepickup`,
            state: { offering: "precious and beautiful jewels" },
          }}
          className="offerButton">
          <p> Jewelry</p>
          <img src={jewels} alt="diamonds"></img>
        </Link>
      </div>
    </div>
  );
};

export default ChooseOffering;
