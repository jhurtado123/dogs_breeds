import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDogsBreeds} from "../reducers/dogsReducer";

function DogsStadistics({dispatch, isLoading}) {

  useEffect(() => {
    dispatch(getDogsBreeds());
  }, []);

  return (
      <div className="dogs-stadistics-wrapper">
        {isLoading ? 'loading' : ''}
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