const express = require("express");

// Routes
const shopCart = require("./routes/api/shopCart");

// Create our app
const app = express();

// Parse JSON
app.use(express.json({ extended: false }));

// Use routes
app.use("/api/cart", shopCart);

// Define port
const port = process.env.port || 4000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
