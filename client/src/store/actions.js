export const addGood = good => ({
  type: "ADD",
  payload: good
});

export const removeGood = good => ({
  type: "REMOVE",
  payload: good
});

export const clearCart = () => ({
  type: "CLEAR"
});
