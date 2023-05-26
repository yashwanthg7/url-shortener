const path = require("path");

const redirectToGoogle = async (req, res) => {
  res.redirect("https://www.google.com/");
};

const redirectToGithub = async (req, res) => {
  res.redirect("https://github.com/");
};

const getEndpoints = async (req, res) => {
  //   console.log(__dirname);
  res.sendFile(
    path.join(__dirname, "..", "pages", "redirectSampleInformation.html")
  );
};
module.exports = {
  redirectToGithub,
  redirectToGoogle,
  getEndpoints,
};
