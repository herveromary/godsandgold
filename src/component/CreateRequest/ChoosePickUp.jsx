import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/css/ChoosePickUp.css";
import "react-calendar/dist/Calendar.css";

const PickUp = ({ location }) => {
  const { offering } = location.state;
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1 className='titleH1PickUp'>Prepare your offering</h1>
      <h2 className='titleH2PickUp'>Pick up time</h2>
      <p>{offering}</p>
      <div className='calendar'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <form className='formPickUp'>
        <input className='inputPickUp' placeholder='Adress' />
        <button className='buttonPickUp'>Send</button>
      </form>
    </div>
  );
};

export default PickUp;
