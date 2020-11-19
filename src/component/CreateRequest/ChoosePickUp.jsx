import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../../styles/css/ChoosePickUp.css";
import "react-calendar/dist/Calendar.css";

const RecapBlock = ({ recapBlock }) => {
  return (
    <div className='textsChoosePickUp'>
      <p className='textPickUp'>God : {recapBlock.god}</p>
      <p className='textPickUp'>Request : {recapBlock.request}</p>
      <p className='textPickUp'>Offering : {recapBlock.offering}</p>
    </div>
  );
};

const PickUp = ({ location }) => {
  const { offering } = location.state;

  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState("");
  const request = localStorage.getItem("request");
  const recap = { god: "id", request, offering };

  // const recap = useContext(context de Jo)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(date, address);
  };
  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <h1 className='titleH1PickUp'>Prepare your offering</h1>
      <RecapBlock recapBlock={recap} />
      <h2 className='titleH2PickUp'>Pick up time</h2>
      <form className='formPickUp' onSubmit={handleSubmit}>
        <div className='calendar'>
          <Calendar
            className='customCalendar'
            onChange={setDate}
            value={date}
          />
        </div>
        <div className='formInput'>
          <label htmlfor='address'>Address</label>
          <input
            name='address'
            id='address'
            className='inputPickUp'
            type='text'
            placeholder='Efpolidos Street, Athens'
            value={address}
            onChange={handleChange}
          />
        </div>
        <button className='buttonPickUp' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default PickUp;
