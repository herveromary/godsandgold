import React, { useEffect, useState } from "react";
import GodDeliveryCard from "./GodDeliveryCard";

export default function GodDelivery() {
  const [offerings, setOfferings] = useState([]);

  useEffect(() => {
    setOfferings([
      {
        god: "Zeus",
        mortal: "Gervais",
        request: "une API qui fonctionne",
        offering: "animal",
        date: "23 nikoçaliakas",
        adress: "allée de serr",
      },
    ]);
  }, []);

  offerings.length !== 0 && console.log(offerings.map((e) => e));
  console.log(offerings.length);
  return (
    <div>
      <h2>Hey Godname, here are the deliveries mortals are waiting for :</h2>
      {offerings.map((offering) => (
        <GodDeliveryCard
          mortal={offering.mortal}
          request={offering.request}
          offering={offering.offering}
          date={offering.date}
          adress={offering.adress}
        />
      ))}
    </div>
  );
}
