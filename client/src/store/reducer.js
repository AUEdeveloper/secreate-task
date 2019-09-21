const addGood = (goods, payload) => {
  for (let good of goods) {
    if (good.name === payload.name && good.currency === payload.currency) {
      good.quantity += 1;
      return goods;
    } else {
      continue;
    }
  }

  return [...goods, payload];
};

const removeGood = (goods, payload) => {
  for (const good of goods) {
    if (good.name === payload.name && good.currency === payload.currency) {
      good.quantity -= 1;
      if (good.quantity === 0) {
        return goods.filter(good => {
          return good.quantity > 0;
        });
      }
      return goods;
    } else {
      continue;
    }
  }
};

const initialState = {
  goods: [],
  totalQuantity: 0,
  totalPrice: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        goods: addGood(state.goods, payload),
        totalQuantity: state.totalQuantity + 1,
        totalPrice: null
      };
    case "REMOVE":
      return {
        ...state,
        goods: removeGood(state.goods, payload),
        totalQuantity: state.totalQuantity - 1,
        totalPrice: null
      };
    case "CLEAR":
      return {
        ...state,
        goods: [],
        totalQuantity: 0,
        totalPrice: null
      };
    case "GET_TOTAL_PRICE":
      return {
        ...state,
        goods: [],
        totalQuantity: 0,
        totalPrice: payload
      };
    default:
      return state;
  }
}
