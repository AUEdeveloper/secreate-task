import React from "react";
import { connect } from "react-redux";
import "./Good.css";

import { addGood } from "../../../store/actions";

const Good = ({ name, price, currency, imgUrl, addGood }) => {
  const handleAdd = () => {
    addGood({ name, price, currency, quantity: 1 });
  };

  return (
    <div className="good" onClick={handleAdd}>
      <div className="good__img">
        <img src={imgUrl} alt="1" />
      </div>
      <div className="good__info">
        <h3>{name}</h3>
        <span>
          {price} {currency}
        </span>
      </div>
    </div>
  );
};

export default connect(
  ({ goods }) => ({
    goods
  }),
  { addGood }
)(Good);
