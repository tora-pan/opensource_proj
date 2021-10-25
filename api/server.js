const express = require("express");
const app = express();
const port = 3000;

// get requests
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the API");
});

// listen on port 3000
app.listen(port, () => {
  console.log(`Listening at http://locaholst:${port}`);
});
