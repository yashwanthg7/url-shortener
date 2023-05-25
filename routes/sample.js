const express = require("express");
const { getGoogleUrl, getGithubUrl } = require("../controllers/sample");

const router = express.Router();

router.get("/google", getGoogleUrl);
router.get("/github", getGithubUrl);

module.exports = router;
