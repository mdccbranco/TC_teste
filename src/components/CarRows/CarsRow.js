import React from "react";

import './CarsRow.css'

const CarRow = ({ car }) => {
  return (
    <div className="car-details">
      <div className="info-bold">
        <div>{car.title}</div>
        <div>R$ {car.price}</div>
      </div>

      <div className="info">
        <div>
          {car.model} -
          {car.brand} -
          {car.km}
        </div>
        <div>{car.year}</div>
      </div>
    </div>
  );
};

export default CarRow;
