/* eslint-disable react/prop-types */

import React from "react";

class CreateCars extends React.Component {
  constructor() {
    super();
    this.state = {
      car: {
        make: "",
        model: "",
        year: "",
        color: "",
        engine: "",
      }
    };
  }

  render() {
    return (
      <div>
        <div><br />
          <h2>Add a Car</h2>
          <form id="myForm" onSubmit={(e) => {
            e.preventDefault();
            if (this.props.addCar) {
              this.props.addCar(this.state.car);
            }
          }}>
            <div>
                        Make: <input className="form-control form-control-sm" onChange={(e) => {
                          const car = {make: e.target.value};
                          this.setState({
                            car: Object.assign(this.state.car,car)
                          });
                        }} />
            </div>
            <div>
                        Model: <input className="form-control form-control-sm" onChange={(e) => {
                          const car = {model: e.target.value};
                          this.setState({
                            car: Object.assign(this.state.car,car)
                          });
                        }} />
            </div>   
            <div>
                        Year: <input className="form-control form-control-sm" onChange={(e) => {
                          const car = {year: e.target.value};
                          this.setState({
                            car: Object.assign(this.state.car,car)
                          });
                        }} />
            </div>
            <div>
                        Color: <input className="form-control form-control-sm" onChange={(e) => {
                          const car = {color: e.target.value};
                          this.setState({
                            car: Object.assign(this.state.car,car),
                            input: ""
                          });
                        }} />
            </div>
            <div>
                        Fuel Engine: <input className="form-control form-control-sm" 
                          onChange={(e) => {
                            const car = {engine: e.target.value};
                            this.setState({
                              car: Object.assign(this.state.car,car)
                            });
                          }} />
            </div>
            <button onClick="clearForm()">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateCars;
