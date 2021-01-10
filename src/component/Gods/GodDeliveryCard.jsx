import react, { useEffect, useState } from 'react';
import axios from 'axios';

export default function GodDeliveryCard(props) {
  const { mortal, request, offering, date, adress } = props;

  return (
    <div>
      <p>
        {mortal} offered you {offering} and expects {request} before {date} at{' '}
        {adress}{' '}
      </p>
    </div>
  );
}
