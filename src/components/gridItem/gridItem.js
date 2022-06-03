import React from 'react';

const GridItem = ({ index }) => {

  return (
    <div className="grid">
      <div className={`grid__item grid__item--${index}`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
      <div className={`grid__item--placeholder`} />
    </div>
  );
}

export default GridItem;
