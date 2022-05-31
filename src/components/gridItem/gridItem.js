import React from 'react';

const GridItem = ({ index }) => {

  return (
    <div className="grid">
      <div className={`grid__item grid__item--${index}`} />
    </div>
  );
}

export default GridItem;
