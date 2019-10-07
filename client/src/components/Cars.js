import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cars(props) {
  const carDivs = props.cars.map((car, i) => {
    return (
      <div key={i}>
        <h3>{car.year} {car.make} {car.model} 
          <button onClick={() => 
                props.deleteCar(car._id)}>Delete </button>
          <Link to={"/cars/" + car._id}>View</Link> </h3>
      </div>);
  });
  return (
    <div>
      {carDivs}
    </div>
  );
}

Cars.propTypes = {
  cars: PropTypes.array
};

export default Cars;
