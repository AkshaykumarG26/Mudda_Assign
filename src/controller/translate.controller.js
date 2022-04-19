const express = require("express");

const router = express.Router();

const TranslatedData = require("../model/translate.model");

const translate = require("@vitalets/google-translate-api");


router.post("/", (req, res) => {
  try {
    // console.log(req.body.text)
    // console.log(req.body.to)
    translate(req.body.text, { to: req.body.to })
      .then((response) => {
        // console.log(response.text);
        // console.log(response.from.language.iso);
        // const d = ({...req.body, response});
        const data = TranslatedData.create(req.body);
        res.send(response.text);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});


module.exports = router;
