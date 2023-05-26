const express = require("express");
const {
  redirectToGoogle,
  redirectToGithub,
  getEndpoints,
} = require("../controllers/redirectSampleRoutes");

const router = express.Router();

router.get("/google", redirectToGoogle);
router.get("/github", redirectToGithub);
router.get("/", getEndpoints);
module.exports = router;
