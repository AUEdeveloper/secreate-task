const express = require("express");

// Routes
const shopCart = require("./routes/api/shopCart");

// Create our app
const app = express();

// Parse JSON
app.use(express.json({ extended: false }));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Use routes
app.use("/api/cart", shopCart);

// Define port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
