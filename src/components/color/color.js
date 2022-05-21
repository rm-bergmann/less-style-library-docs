import React from 'react';

const Color = (color) => {

  const colorName = color.colors;
  const baseClassName = 'colors';
  const wrapperClassName = `${baseClassName}__wrapper`;
  const blockClassName = `${baseClassName}__block`;
  const colorClassName = `${blockClassName}--${colorName}`;

  return (
    <div className={wrapperClassName}>
      <p>{`@${colorName}`}</p>
      <div className={`${blockClassName} ${colorClassName}`} />
    </div>
  );

}

export default Color;
