import React from "react";
import { connect } from 'react-redux';


const Smurf = ({ props }) => {
  return (
    <div className="name">
      <h1> {props.name} </h1>
      <div className="info">
        <p>age: {props.age}</p>
        <p>height: {props.height} </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        deleteSmurf: state.deleteSmurf,
    }
}

export default connect(mapStateToProps) (Smurf);
