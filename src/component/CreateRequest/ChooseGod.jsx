import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import BottomNav from "../../Reusable/BottomNav";
import "../../styles/css/ChooseGod.css";
import StepContext from "../../StepContext";
import TextTransition, { presets } from "react-text-transition";

const ChooseGod = () => {
  const { stepRequest, setStepRequest } = useContext(StepContext);
  const TEXTS = [
    `Hello`,
    "Choose Your God",
    "Make your request",
    "Make an offering",
    "We may make your...",
    "...wishes come true!",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [index, setIndex] = useState(0);

  let history = useHistory();

  const [gods, setGods] = useState([]);

  const handleClick = (e) => {
    setStepRequest({ ...stepRequest, stepOne: true });
    const choosenGod = gods.filter((god) => god.name === e.target.alt);
    localStorage.setItem("choosenGod", JSON.stringify(choosenGod[0]));
    history.push("/chooserequest");
  };

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 3 seconds
    );

    axios
      .get("https://hookspendables.herokuapp.com/api/gods")
      .then((response) => response.data)
      .then((data) => setGods(data));
  }, []);

  return (
    <div className="container-god-slide">
      <h3 className="gods-slide-title">
        <TextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
          noOverflow={true}
        />
      </h3>
      <Slider {...settings}>
        {gods &&
          gods.map((god) => (
            <div key={god.id} className="god-slide">
              <img
                onClick={handleClick}
                className="god-slide-image"
                src={god.picture}
                alt={god.name}
              />
              <h3 className="god-slide-name">{god.name}</h3>
            </div>
          ))}
      </Slider>

      <BottomNav />
    </div>
  );
};

export default ChooseGod;
