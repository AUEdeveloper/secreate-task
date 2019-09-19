const calcInRub = (goods, usdValue, eurValue) => {
  return goods.reduce((initialPrice, { quantity, price, currency }) => {
    switch (currency) {
      case "RUB":
        return initialPrice + quantity * price;
      case "USD":
        return initialPrice + quantity * price * usdValue;
      case "EUR":
        return initialPrice + quantity * price * eurValue;
      default:
        break;
    }
  }, 0);
};

module.exports = calcInRub;
