import React from 'react';

function StadisticsBody({changeView}) {
  return (
    <div className="stadistics-header">
      <div className={'block all'} onClick={() => changeView('all')}>All</div>
      <div className={'block top-ten'} onClick={() => changeView('topTen')}>Top ten</div>
    </div>
  );
}

export default StadisticsBody;