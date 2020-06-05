import React from "react";
import CardRows from "../CarRows/CarsRow";
import "./CarDetails.css";

const CarDetails = ({ searchResult, getOneCar }) => {
  return (
    <div className="car-list">
      {searchResult &&
        searchResult.map((item, idx) => (
          <button
            className="clear-button-style"
            onClick={() => getOneCar(item)}
          >
            <CardRows car={item} key={idx} />
          </button>
        ))}
    </div>
  );
};

export default CarDetails;
