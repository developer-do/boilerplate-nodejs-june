var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", async function (req, res, next) {
  // database

  const body = {
    result: 1,
    name: "main home",
  };
  res.json(body);
});

module.exports = router;
