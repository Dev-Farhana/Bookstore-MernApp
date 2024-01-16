const express = require("express");
const app = express();

// const mongodb = require("./connection/conn");
require("./connection/conn");
app.use(express.json());
const routes = require("./routes/bookRoute");

app.use(routes);

const PORT = 2000;

app.listen(PORT, () => console.log(`Server Started`))