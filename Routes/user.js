const express = require("express");
const router = express.Router();
const User = require("../Models/users");

// Define your routes here
router.post("/register", async (req, res) => {
  const { name, phone } = req.body;
  try {
    const phoneExist = await User.findOne({ phone }).exec();
    if (phoneExist) {
      return res.status(400).send("Phone number already exist");
    }
    const user = new User({ phone, name });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
