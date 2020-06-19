import React from 'react';
import '../assets/css/stadisticsHeader.scss';

function StadisticsHeader({changeView, currentView}) {
  return (
    <div className="stadistics-header">
      <div className={`block top-fifty ${currentView === 'topFifty' && 'active'}`} onClick={() => changeView('topFifty')}>Top Fifty</div>
      <div className={`block top-ten ${currentView === 'topTen' && 'active'}`} onClick={() => changeView('topTen')}>Top ten</div>
    </div>
  );
}

export default StadisticsHeader;