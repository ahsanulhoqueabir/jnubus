const express = require("express");
const router = express.Router();
const {
  get,
  add,
  getById,
  busInfo,
  bulkchange,
} = require("../controller/busController.js");

router.get("/all", get);
router.post("/add", add);
router.get("/find/:id", getById);
router.get("/basic", busInfo);
router.put("/change", bulkchange);

module.exports = router;
