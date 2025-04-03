const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const queryParams = req.query;
  res.json({
    message: "GET request handled by Backend 1",
    receivedQueryParams: queryParams,
  });
});

app.listen(5000, () => console.log("Backend 1 running on port 5000"));
