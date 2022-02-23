const express = require("express");
const router = new express.Router();
const phonesData = require("../phonesData");

router.get("/", (req, res) => {
  res.status(200).json(phonesData);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const phoneData = phonesData.find((phone) => id == phone.id);

  if (phoneData) {
    res.status(200).json(phoneData);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});

module.exports = router;
