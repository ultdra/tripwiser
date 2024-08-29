const express = require("express");
const router = express.Router();

router.use("/transaction", require("./transaction.route"));
router.use("/auth", require("./auth.route"))

module.exports = router;