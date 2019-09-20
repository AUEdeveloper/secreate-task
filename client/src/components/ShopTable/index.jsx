import React from "react";
import "./ShopTable.css";

import Good from "../shared/Good";

// Fake shop data
import { shopData } from "../../shopData";

const ShopTable = ({ currency }) => {
  return (
    <div className="shopTable">
      {shopData.map(({ id, name, price, imgUrl }) => (
        <Good
          key={id}
          name={name}
          price={price}
          currency={currency}
          imgUrl={imgUrl}
        />
      ))}
    </div>
  );
};

export default ShopTable;
