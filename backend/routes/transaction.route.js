const express = require('express');
const router = express.Router();


router.get("/getGroupTransactions", (req, res) => {
    res.send("TRANSACTIONS FOR GROUP NOT IMPLEMENTED YET");
});

router.post("/addTransaction", (req, res) => {
    res.send("Posted successfully!!");
});

module.exports = router;