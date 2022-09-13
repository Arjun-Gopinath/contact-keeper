const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");
const { check, validationResult } = require("express-validator");

//private
// Get a contact
router.get("/", auth, async (req, res) => {
  try {
    // Find all contact user of that id and sort such that latest contacts comes first
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//private
// Add new contact
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, phone, type } = req.body;

      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

//private
// Update an existing contact
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  const contactFields = {};

  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    // Check if contact exists
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    // Check if user owns the contact
    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "User not authorised" });

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//private
// Delete a contact
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);

    // Check if contact exists
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    // Check if user owns the contact
    if (contact.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "User not authorised" });

    await Contact.findByIdAndRemove(req.params.id);

    res.send("Contact removed");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
