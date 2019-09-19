const express = require("express");
const router = express.Router();

const getCurrencyData = require("../../middlewares");
const calcInRub = require("../../helpers");

//@route  GET request to api/cart/test
//@desc   Tests cart route
//@access Public
router.get("/test", (_, res) =>
  res.json({ msg: "Shopping Cart works succesfully!" })
);

//@route  POST request to api/cart/price
//@desc   Total price route
//@access Public
router.post("/total-price", getCurrencyData, (req, res) => {
  const { usdValue, eurValue } = req.currencyData;
  const goods = req.body.goods;

  try {
    // Calculate our price in rubles
    const rubPrice = calcInRub(goods, usdValue, eurValue);

    // Send our calculated data in different currencies to client
    res.json({
      totalPrice: {
        RUB: rubPrice.toFixed(2),
        USD: (rubPrice / usdValue).toFixed(2),
        EUR: (rubPrice / eurValue).toFixed(2)
      }
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Oops, server error =(");
  }
});

module.exports = router;
