import React from "react";
import { connect } from "react-redux";
import { decrement } from "../reducers/counterSlice";

const ButtonComponentDecrement = (props) => {
  return <button onClick={props.decrement}>-1</button>;
};

const mapDispatchToProps = {
  decrement,
};

export default connect(null, mapDispatchToProps)(ButtonComponentDecrement);
