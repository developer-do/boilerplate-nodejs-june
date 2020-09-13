var express = require("express");
var router = express.Router();
let uuid = require("uuid");
let { database } = require("../../database/mysql");
const uuidV4 = uuid.v4;
/* GET home page. */

/**
 * NOTE: api get user list
 */
router.get("/list", async function (req, res, next) {
  // database
  const rows = await database.query("select * from todo.users");
  const userList = [...rows];
  const body = {
    result: 1,
    list: userList,
  };
  res.json(body);
});

/**
 * NOTE: api insert user
 */
router.post("/create", async function (req, res, next) {
  // database
  const { name } = req.body;
  const userCode = uuidV4().replace(/-/g, "");
  const rows = await database.query(
    `insert into todo.users (name,userCode) values ("${name}", "${userCode}")`
  );

  const body = {
    result: 1,
  };
  if (rows.affectedRows !== 1) {
    body.result = 2;
  }

  res.json(body);
});

module.exports = router;
