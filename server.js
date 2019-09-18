const express = require("express");

const app = express();

app.use(express.json({ extended: false }));

const port = process.env.port || 4000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
