import React from 'react';

const Position = ({ index }) => {

  return (
    <div className="position-wrapper">
      <div className={`position position--${index}`} />
    </div>
  );
}

export default Position;
