const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

// const mongodb = require("./connection/conn");
require("./connection/conn");
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve("../frontend/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/dist/index.html"));
});

const routes = require("./routes/bookRoute");

app.use(routes);

const PORT = 2000;

app.listen(PORT, () => console.log(`Server Started at ${PORT}`))