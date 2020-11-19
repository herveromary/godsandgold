import React, { useState } from "react";

import "../../styles/css/ChooseOffering.css";

import fruit from "../../styles/fruits.png";
import animal from "../../styles/ewe.png";
import family from "../../styles/family.png";
import jewels from "../../styles/diamond.png";
import wine from "../../styles/barrel.png";
import coin from "../../styles/coins.png";

const ChooseOffering = () => {
  const [offering, setOffering] = useState("");
  console.log(offering);

  return (
    <div className="offeringpage">
      <h2> What do you want to offer ? </h2>
      <div className="selectGift">
        <div
          className="offerButton"
          onClick={() => setOffering("a galleon of wine")}>
          <p> Galleon of wine</p>
          <img src={wine} alt="wine"></img>
        </div>
        <div
          className="offerButton"
          onClick={() => setOffering("an animal for sacrifice")}>
          <p> Sacrificial Animal</p>
          <img src={animal} alt="animal"></img>
        </div>
        <div
          className="offerButton"
          onClick={() => setOffering("a member of your family")}>
          <p> Family Member</p>
          <img src={family} alt="family"></img>
        </div>
        <div
          className="offerButton"
          onClick={() => setOffering("a basket full of appetizing fruits")}>
          <p> Fruit basket</p>
          <img src={fruit} alt="fruits"></img>
        </div>
        <div className="offerButton" onClick={() => setOffering("money")}>
          <p> Oboli</p>
          <img src={coin} alt="coins"></img>
        </div>
        <div
          className="offerButton"
          onClick={() => setOffering("precious and beautiful jewels")}>
          <p> Jewelry</p>
          <img src={jewels} alt="diamonds"></img>
        </div>
      </div>
    </div>
  );
};

export default ChooseOffering;
