import React from 'react';

const Button = ({ buttonLabel }) => {

  const className = buttonLabel.split(' ').join('-').toLowerCase();

  return (
    <div className="button-wrapper">
      <button type="button" className={className}>
        {buttonLabel}
      </button>
    </div>
  );
}

export default Button;
