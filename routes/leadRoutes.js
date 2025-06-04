const express = require("express");
const router = express.Router();
const { getLeadsByUser, postLeadsByUser } = require("../controllers/leadController");

router.get("/:userId", getLeadsByUser);
router.post("/",postLeadsByUser);
module.exports = router;
