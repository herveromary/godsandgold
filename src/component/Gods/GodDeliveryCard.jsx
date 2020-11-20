import react, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/css/GodDeliveryCard.css';

export default function GodDeliveryCard(props) {
  const { mortal, request, offering, date, adress } = props;

  return (
    <div className='deliverycard'>
      <ul>
        <li>
          {mortal} offered you {offering} and expects {request} before {date} at{' '}
          {adress}{' '}
        </li>
      </ul>
    </div>
  );
}
