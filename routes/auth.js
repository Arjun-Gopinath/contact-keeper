const express = require("express");
const router = express.Router();

//private
router.get("/", (req, res) => {
  res.send("Get a user");
});

//public
router.post("/", (req, res) => {
  res.send("Log in a user");
});

module.exports = router;
