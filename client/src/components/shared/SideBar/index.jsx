import React from "react";
import { connect } from "react-redux";
import ReactSideBar from "react-sidebar";
import SideBarList from "./SideBarList";

import { removeGood, clearCart } from "../../../store/actions";
import { getTotalPrice } from "../../../store/thunkAction";

const Sidebar = ({
  goods,
  totalQuantity,
  totalPrice,
  isOpen,
  setOpen,
  removeGood,
  clearCart,
  getTotalPrice
}) => {
  const handleRemove = (name, currency) => {
    removeGood({ name, currency });
  };

  return (
    <ReactSideBar
      sidebar={
        <SideBarList
          goods={goods}
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          handleRemove={handleRemove}
          handleClear={clearCart}
          handleCalculate={getTotalPrice}
        />
      }
      open={isOpen}
      onSetOpen={setOpen}
      pullRight={true}
      styles={{
        sidebar: {
          background: "white"
        }
      }}
    >
      <div className="shop-header__cart" onClick={() => setOpen(true)}>
        <i className="fas fa-shopping-bag"></i>
        <span className="shop-header__quantity">{totalQuantity}</span>
      </div>
    </ReactSideBar>
  );
};

export default connect(
  ({ goods, totalQuantity, totalPrice }) => ({
    goods,
    totalQuantity,
    totalPrice
  }),
  { removeGood, clearCart, getTotalPrice }
)(Sidebar);
