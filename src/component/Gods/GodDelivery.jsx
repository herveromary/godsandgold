import react, { useEffect, useState } from 'react';
import axios from 'axios';
import GodDeliveryCard from './GodDeliveryCard';
import '../../styles/css/GodDelivery.css';
import { Redirect } from 'react-router-dom';

export default function GodDelivery() {
  const [offerings, setOfferings] = useState([]);
  const [redirect, setRedirect] = useState(false);
  let godname = localStorage.getItem('godname');
  godname = JSON.parse(godname);

  const LogOut = () => {
    setRedirect(true);
  };

  useEffect(() => {
    setOfferings([
      {
        god: 'Zeus',
        mortal: 'Gervais',
        request: 'une API qui fonctionne',
        offering: 'animal',
        date: '23 nikoçaliakas',
        adress: 'allée de serr',
      },
      {
        god: 'Zeus',
        mortal: 'Gervais',
        request: 'une API qui fonctionne',
        offering: 'animal',
        date: '23 nikoçaliakas',
        adress: 'allée de serr',
      },
    ]);
  }, []);

  offerings.length !== 0 && console.log(offerings.map((e) => e));
  console.log(offerings.length);
  return (
    <div className='deliveryGod_page'>
      <h2>Hey {godname}, here are the deliveries mortals are waiting for :</h2>
      {offerings.map((offering) => (
        <GodDeliveryCard
          mortal={offering.mortal}
          request={offering.request}
          offering={offering.offering}
          date={offering.date}
          adress={offering.adress}
        />
      ))}
      <button type='button' onClick={() => LogOut()}>
        LogOut
      </button>
      {redirect && <Redirect to='/' />}
    </div>
  );
}
