import React from "react";

import Banner from "../Banner/Banner";
import CreateCar from "../CreateCar/CreateCar";
import CarDetails from "../CarDetails/CarDetails";

const Main = ({
  showForm,
  searchResult,
  oneCar,
  banner,
  resetState,
  getOneCar,
  openForm,
  api,
  brands,
}) => {
  return (
    <>
      {banner && <Banner />}
      {showForm && (
        <CreateCar
          openForm={openForm}
          brands={brands}
          resetState={resetState}
          api={api}
        />
      )}
      {oneCar && (
        <CreateCar
          oneCar={oneCar}
          openForm={openForm}
          brands={brands}
          resetState={resetState}
          api={api}
        />
      )}
      {searchResult && !oneCar && !showForm ? (
        <CarDetails getOneCar={getOneCar} searchResult={searchResult} />
      ) : null}
    </>
  );
};

export default Main;
