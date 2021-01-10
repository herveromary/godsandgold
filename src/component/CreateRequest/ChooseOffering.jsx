import React, { useState, useContext } from "react";
import StepContext from "../../StepContext";
import Topbar from "../../Reusable/Topbar";
import "../../styles/css/ChooseOffering.css";
import DelayLink from "react-delay-link";
import BottomNav from "../../Reusable/BottomNav";
import fruit from "../../styles/fruitss.png";
import animal from "../../styles/sheep.png";
import family from "../../styles/family2.png";
import jewels from "../../styles/chest.png";
import wine from "../../styles/grapes.png";
import coin from "../../styles/money.png";

const ChooseOffering = () => {
  const { stepRequest, setStepRequest } = useContext(StepContext);
  const [offering, setOffering] = useState("");
  const [selectWine, setSelectWine] = useState(false);
  const [selectAnimal, setSelectAnimal] = useState(false);
  const [selectFruit, setSelectFruit] = useState(false);
  const [selectHuman, setSelectHuman] = useState(false);
  const [selectJewel, setSelectJewel] = useState(false);
  const [selectMoney, setSelectMoney] = useState(false);

  const handleOffering = () => {
    setSelectWine(true);
    setStepRequest({ ...stepRequest, stepThree: true });
  };

  return (
    <div className="offeringpage-global">
      <Topbar />
      <div className="offeringpage">
        <h2 className="offering-title"> What do you want to offer ? </h2>
        <div className="selectGift">
          <div
            onClick={() => {
              handleOffering();
            }}
            className={selectWine ? "offerButtonused" : "offerButton"}
          >
            <DelayLink
              delay={400}
              to={{
                pathname: `/choosepickup`,
                state: { offering: "a galleon of wine" },
              }}
            >
              <p className="card-title"> Galleon of wine</p>
              <img src={wine} alt="wine"></img>
            </DelayLink>
          </div>
          <div
            onClick={() => {
              handleOffering();
            }}
            className={selectAnimal ? "offerButtonused" : "offerButton"}
          >
            <DelayLink
              delay={400}
              to={{
                pathname: `/choosepickup`,
                state: { offering: "an animal for sacrifice" },
              }}
            >
              <p className="card-title"> Sacrificial Animal</p>
              <img src={animal} alt="animal"></img>
            </DelayLink>
          </div>
          <div
            onClick={() => {
              handleOffering();
            }}
            className={selectHuman ? "offerButtonused" : "offerButton"}
          >
            <DelayLink
              delay={400}
              to={{
                pathname: `/choosepickup`,
                state: { offering: "a member of your family" },
              }}
            >
              <p className="card-title"> Family Member</p>
              <img src={family} alt="family"></img>
            </DelayLink>
          </div>
          <div
            onClick={() => {
              handleOffering();
            }}
            className={selectFruit ? "offerButtonused" : "offerButton"}
          >
            <DelayLink
              delay={400}
              to={{
                pathname: `/choosepickup`,
                state: {
                  offering: "an appetizing basket full of fresh fruits",
                },
              }}
            >
              <p className="card-title"> Fruit basket</p>
              <img src={fruit} alt="fruits"></img>
            </DelayLink>
          </div>
          <div
            onClick={() => {
              handleOffering();
            }}
            className={selectMoney ? "offerButtonused" : "offerButton"}
          >
            <DelayLink
              delay={400}
              to={{ pathname: `/choosepickup`, state: { offering: "money" } }}
            >
              <p className="card-title"> Oboli and drachma</p>
              <img src={coin} alt="coins"></img>
            </DelayLink>
          </div>
          <div
            onClick={() => {
              handleOffering();
            }}
            className={selectJewel ? "offerButtonused" : "offerButton"}
          >
            <DelayLink
              delay={400}
              to={{
                pathname: `/choosepickup`,
                state: { offering: "precious and beautiful jewels" },
              }}
              className="offerButton"
            >
              <p className="card-title"> Precious jewelry</p>
              <img src={jewels} alt="diamonds"></img>
            </DelayLink>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default ChooseOffering;
