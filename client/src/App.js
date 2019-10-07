/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import CarContainer from "./containers/CarContainer";
import CarsContainer from "./containers/CarsContainer";
import CreateCarsContainer from "./containers/CreateCarsContainer";
import { BrowserRouter,Route,Switch,Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadCars();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">My Cars App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link to={"/"} className="nav-link js-scroll-trigger">Home</Link></li>
                    <li className="nav-item"><Link to={"/cars"} className="nav-link js-scroll-trigger">Cars</Link></li>
                    <li className="nav-item"><Link to={"/addCar"} className="nav-link js-scroll-trigger">Add Car</Link></li>
                  </ul>
                </div>
              </div>

            </nav>
            <Switch>
              <Route path="/cars/:id" component={CarContainer} />
              <Route path="/cars" component={CarsContainer} />
              <Route path="/addCar" component={CreateCarsContainer} />
              <Route path="/" component={Main} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default (App);
