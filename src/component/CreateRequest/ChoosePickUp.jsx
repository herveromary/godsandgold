import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/css/ChoosePickUp.css";
import "react-calendar/dist/Calendar.css";
import RecapCard from "../../Reusable/RecapCard";
import Topbar from "../../Reusable/Topbar";
import axios from "axios";

const PickUp = ({ location }) => {
  const { offering } = location.state;

  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState("");

  let godDetails = localStorage.getItem("choosenGod");
  godDetails = JSON.parse(godDetails);
  let godName = godDetails.name;
  const request = localStorage.getItem("request");
  const recap = { god: `${godName}`, request, offering };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/requestsummary", {
      date: `${date.getDate()} Nikossaliagas`,
      address,
      offering,
    });
  };
  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  const sendRequest = () => {
    const user = localStorage.getItem("user");
    axios.post("http://localhost:3000/api/offerings", {
      user_id: user.id,
      god_id: godDetails.id,
      request: request,
      offering: offering,
      date: date,
      adress: address,
      status: "pending",
      user_name: user.login,
    });
  };
  return (
    <div className="pickup">
      <Topbar />
      <div>
        <h2>Prepare your offering</h2>
        <RecapCard details={recap} />
        <h3 className="titleH3PickUp">Pick up time</h3>
        <form className="formPickUp" onSubmit={handleSubmit}>
          <div className="calendar">
            <Calendar
              className="customCalendar"
              onChange={setDate}
              value={date}
            />
          </div>
          <div className="formInput">
            <label htmlFor="address">Address</label>
            <input
              name="address"
              id="address"
              className="inputPickUp"
              type="text"
              placeholder="Efpolidos Street, Athens"
              value={address}
              onChange={handleChange}
            />
          </div>
          <button className="buttonPickUp" type="submit" onClick={sendRequest}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default PickUp;
