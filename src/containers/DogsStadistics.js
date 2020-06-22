import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getDogsBreeds} from "../reducers/dogsReducer";
import StadisticsHeader from "../components/StadisticsHeader";
import StadisticsBody from "../components/StadisticsBody";
import '../assets/css/dogStadistics.scss';
import LoadingBars from "../components/LoadingBars";


function DogsStadistics({dispatch, isLoading, dogBreeds}) {

  const [view, changeView] = useState('topFifty');

  useEffect(() => {

    dispatch(getDogsBreeds());

  }, []);

  const getDataToPrint = () => {
    const returnData = dogBreeds.slice().sort((a, b) => a.availableImages < b.availableImages);
    if (view === 'topFifty') return returnData.slice(0,50);

    return returnData.slice(0, 10);
  };

  return (
      <div className="dogs-stadistics-wrapper">
        <StadisticsHeader changeView={changeView} currentView={view} />
        { isLoading ? <LoadingBars/> : <StadisticsBody data={getDataToPrint()}/> }
        <div className={'info-text'}>
          * Number of images for each dog breed
        </div>
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