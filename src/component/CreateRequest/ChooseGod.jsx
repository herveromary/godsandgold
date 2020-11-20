import { useState, useEffect } from "react";
import Slider from "react-slick";
import BottomNav from "../../Reusable/BottomNav";
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
      name: "ZEUS",
      description: null,
      picture: "https://i.ibb.co/vmX44ks/Zeus.png",
    },
    {
      id: 11,
      name: "APHRODITE",
      description: null,
      picture: "https://i.ibb.co/Rppxv4v/Aphrodite.png",
    },
    {
      id: 21,
      name: "ARES",
      description: null,
      picture: "https://i.ibb.co/GHHcpQd/Ares.png",
    },
    {
      id: 31,
      name: "DIONYSOS",
      description: null,
      picture: "https://i.ibb.co/Qfk49rq/Dionysos.png",
    },
    {
      id: 41,
      name: "HADES",
      description: null,
      picture: "https://i.ibb.co/qdbpTXy/Had-s.png",
    },
    {
      id: 51,
      name: "HEPHAISTOS",
      description: null,
      picture: "https://i.ibb.co/XjgXd9T/Hepha-stos.png",
    },
    {
      id: 61,
      name: "HERMES",
      description: null,
      picture: "https://i.ibb.co/QFnzXYQ/Herm-s.png",
    },
    {
      id: 71,
      name: "DEMETER",
      description: null,
      picture: "https://i.ibb.co/M8WD8f5/inconnu.png",
    },
    {
      id: 81,
      name: "ATHENA",
      description: null,
      picture: "https://i.ibb.co/1zrpWxD/inconnu02.png",
    },
    {
      id: 91,
      name: "POSEIDON",
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
      <BottomNav />
    </div>
  );
};

export default ChooseGod;
