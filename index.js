const express = require("express");
const app = express();
const port = 5000;
// step2 import
const sampleRouter = require("./routes/sample");
const redirectSampleRouter = require("./routes/redirectSampleRoutes");

app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener!");
});

// step2
app.use("/i", sampleRouter);
app.use("/r", redirectSampleRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
