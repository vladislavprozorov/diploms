import React from 'react';

const MySelect = ({ onChange, value, options, defaultValue }) => {
  return (
    <select onChange={onChange} value={value}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
