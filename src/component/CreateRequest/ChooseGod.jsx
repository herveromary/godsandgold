import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import BottomNav from "../../Reusable/BottomNav";
import "../../styles/css/ChooseGod.css";
import gods from "./godsArray";
import TextTransition, { presets } from "react-text-transition";

const ChooseGod = () => {
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

  /* const [god, setGod] = useState(); */

  const handleClick = (e) => {
    const choosenGod = gods.filter((god) => god.name === e.target.alt);
    localStorage.setItem("choosenGod", JSON.stringify(choosenGod[0]));
    history.push("/chooserequest");
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
  }, []);

  /* const [gods, setGods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/gods")
      .then((response) => response.data)
      .then((data) => setGods(data));
  }, []); */

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
        {gods.map((god) => (
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
