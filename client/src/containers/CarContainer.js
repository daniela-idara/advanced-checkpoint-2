import { connect } from "react-redux";
import Car from "../components/Car";
import { getCar } from "../actions";

function mapStateToProps(state) {

  return {
    car: state.car
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCar(id) {
      dispatch(getCar(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Car);
