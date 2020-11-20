import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/css/ChooseOffering.css";

import fruit from "../../styles/fruitss.png";
import animal from "../../styles/sheep.png";
import family from "../../styles/family2.png";
import jewels from "../../styles/chest.png";
import wine from "../../styles/grapes.png";
import coin from "../../styles/money.png";

const ChooseOffering = () => {
  const [offering, setOffering] = useState("");

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
          <p> Oboli and drachma</p>
          <img src={coin} alt="coins"></img>
        </Link>
        <Link
          to={{
            pathname: `/choosepickup`,
            state: { offering: "precious and beautiful jewels" },
          }}
          className="offerButton">
          <p> Precious jewelry</p>
          <img src={jewels} alt="diamonds"></img>
        </Link>
      </div>
    </div>
  );
};

export default ChooseOffering;
