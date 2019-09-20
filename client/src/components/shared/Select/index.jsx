import React from "react";

const Select = ({ currencies, handleChange }) => {
  return (
    <div style={{ zIndex: 1 }} className="currencySelect">
      <h4>Select currency:</h4>
      <select onChange={e => handleChange(e.target.value)}>
        {currencies.map(currency => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
