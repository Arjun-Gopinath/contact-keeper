const express = require("express");
const router = express.Router();

//public
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
