const axios = require("axios");

const getCurrencyData = async (req, res, next) => {
  try {
    const {
      data: {
        Valute: {
          USD: { Value: usdValue },
          EUR: { Value: eurValue }
        }
      }
    } = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");

    req.currencyData = { usdValue, eurValue };

    next();
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Oops, server error =(");
  }
};

module.exports = getCurrencyData;
