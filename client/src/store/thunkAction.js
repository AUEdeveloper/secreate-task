import axios from "axios";

export const getTotalPrice = () => async (dispatch, getState) => {
  const { goods } = getState();
  try {
    const response = await axios.post("/api/cart/total-price", {
      goods
    });
    const {
      data: { totalPrice }
    } = response;

    dispatch({ type: "GET_TOTAL_PRICE", payload: totalPrice });
  } catch (error) {
    console.error(error.message);
  }
};
