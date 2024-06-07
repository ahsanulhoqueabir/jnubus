const express = require("express");
const router = express.Router();
const {
  add,
  get,
  getById,
  stoppagebasic,
  queryData,
} = require("../controller/stoppageControl.js");
router.post("/add", add);
router.get("/all", get);
router.get("/find/:id", getById);
router.get("/basic", stoppagebasic);
router.get("/query", queryData);
module.exports = router;
