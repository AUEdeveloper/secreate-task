import React from "react";
import "./SideBarList.css";

const SideBarList = ({
  goods,
  totalQuantity,
  totalPrice,
  handleRemove,
  handleClear,
  handleCalculate
}) => {
  return (
    <div className="side-bar-list">
      <h2>Your Goods:</h2>
      {totalPrice && (
        <div className="side-bar-list__total-price">
          <h3>Total:</h3>
          <p>RUB: {totalPrice.RUB}</p>
          <p>USD: {totalPrice.USD}</p>
          <p>EUR: {totalPrice.EUR}</p>
        </div>
      )}
      {goods.map((good, index) => (
        <div key={index} className="good-item">
          <h3>{good.name} </h3>
          <p>
            {good.quantity} X {good.price} = {good.quantity * good.price}{" "}
            {good.currency}
          </p>
          <span onClick={() => handleRemove(good.name, good.currency)}>X</span>
        </div>
      ))}
      {totalQuantity > 0 ? (
        <div className="side-bar-list__controls">
          <button onClick={handleCalculate}>Calculate</button>
          <button onClick={handleClear}>Clear cart</button>
        </div>
      ) : (
        <h3>Cart is empty...</h3>
      )}
    </div>
  );
};

export default SideBarList;
