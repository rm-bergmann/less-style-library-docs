import React from 'react';

const FormSelect = ({ selectClassName }) => {
  return (
    <div className="form-container">
      <select className={selectClassName}>
        <option>Select</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>
  );
};

export default FormSelect;
