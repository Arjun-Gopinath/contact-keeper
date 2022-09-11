const express = require("express");
const router = express.Router();

//private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

//private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
