import { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../styles/css/ChooseGod.css";
import axios from "axios";

const ChooseGod = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const gods = [
    {
      id: 1,
      name: "Zeus",
      description: null,
      picture: "https://i.ibb.co/vmX44ks/Zeus.png",
    },
    {
      id: 11,
      name: "Aphrodite",
      description: null,
      picture: "https://i.ibb.co/Rppxv4v/Aphrodite.png",
    },
    {
      id: 21,
      name: "Ares",
      description: null,
      picture: "https://i.ibb.co/GHHcpQd/Ares.png",
    },
    {
      id: 31,
      name: "Dionysos",
      description: null,
      picture: "https://i.ibb.co/Qfk49rq/Dionysos.png",
    },
    {
      id: 41,
      name: "Hades",
      description: null,
      picture: "https://i.ibb.co/qdbpTXy/Had-s.png",
    },
    {
      id: 51,
      name: "Hephaistos",
      description: null,
      picture: "https://i.ibb.co/XjgXd9T/Hepha-stos.png",
    },
    {
      id: 61,
      name: "Hermes",
      description: null,
      picture: "https://i.ibb.co/QFnzXYQ/Herm-s.png",
    },
    {
      id: 71,
      name: "Demeter",
      description: null,
      picture: "https://i.ibb.co/M8WD8f5/inconnu.png",
    },
    {
      id: 81,
      name: "Athenas",
      description: null,
      picture: "https://i.ibb.co/1zrpWxD/inconnu02.png",
    },
    {
      id: 91,
      name: "Poseidon",
      description: null,
      picture: "https://i.ibb.co/zVxtxKk/Pose-don.png",
    },
  ];

  /* const [gods, setGods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/gods")
      .then((response) => response.data)
      .then((data) => setGods(data));
  }, []); */

  console.log(gods);
  return (
    <div className="container-god-slide">
      <h2 className="gods-slide-title">Choose Your God</h2>
      <Slider {...settings}>
        {gods.map((god) => (
          <div key={god.id} className="god-slide">
            <img className="god-slide-image" src={god.picture} alt={god.name} />
            <h3 className="god-slide-name">{god.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ChooseGod;
