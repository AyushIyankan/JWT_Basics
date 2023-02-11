const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");
const authMiddleWare = require("../middleware/auth");

router.route("/dashboard").get(authMiddleWare, dashboard);
router.route("/login").post(login);

module.exports = router;
