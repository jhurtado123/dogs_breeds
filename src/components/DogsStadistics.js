import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getDogsBreeds} from "../reducers/dogsReducer";
import StadisticsHeader from "./StadisticsHeader";
import StadisticsBody from "./StadisticsBody";

function DogsStadistics({dispatch, isLoading}) {

  const [view, changeView] = useState('all');

  useEffect(() => {
    dispatch(getDogsBreeds());
  }, []);

  return (
      <div className="dogs-stadistics-wrapper">
        <StadisticsHeader changeView={changeView} />

        { isLoading ? 'loading' : <StadisticsBody/> }
      </div>
  );
}

const mapStateToProps = state => {
  return {
    dogBreeds: state.dogBreeds,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default connect(mapStateToProps)(DogsStadistics);