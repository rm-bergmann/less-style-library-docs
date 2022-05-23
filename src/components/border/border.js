import React from 'react';

const Border = ({ index }) => {

  return (
    <div className="border-wrapper">
      <div className={`border-example border-example--${index}`} />
    </div>
  );
}

export default Border;
