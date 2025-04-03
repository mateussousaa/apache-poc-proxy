const express = require("express");
const app = express();
app.use(express.json());

app.post("/search", (req, res) => {
  res.json({ message: "POST request handled by Backend 2", body: req.body });
});

app.listen(5001, () => console.log("Backend 2 running on port 5001"));
