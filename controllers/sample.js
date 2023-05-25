const getGoogleUrl = async (req, res) => {
  let aElement = `<a href="https://www.google.com/">https://www.google.com/</a>`;
  res.send(aElement);
};

const getGithubUrl = async (req, res) => {
  let aElement = '<a href="https://github.com/">https://github.com/</a>';
  res.send(aElement);
};

module.exports = {
  getGithubUrl,
  getGoogleUrl,
};
