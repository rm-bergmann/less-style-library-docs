import React from 'react';

const Shape = ({ index }) => {

  return (
    <div className="shape-wrapper">
      <div className={`shape shape--${index}`} />
    </div>
  );
}

export default Shape;
