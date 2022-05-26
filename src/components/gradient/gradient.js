import React from 'react';

const Gradient = ({ index }) => {

  return (
    <div className="gradient-wrapper">
      <div className={`gradient gradient--${index}`} />
    </div>
  );
}

export default Gradient;
