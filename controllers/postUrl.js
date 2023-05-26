const Joi = require("joi");
const { Url } = require("../models/Urls");

const urlSchema = Joi.object({
  url: Joi.string().required(),
  alias: Joi.string().required().min(1),
});
const createAlias = async (req, res) => {
  try {
    let { error } = await urlSchema.validateAsync(req.body);
    if (error) {
      return res.json({
        error: error.details[0].message,
      });
    }

    let checkUrl = await Url.findOne({ alias: req.body.alias });
    // console.log(checkUrl);

    if (checkUrl) {
      return res.json({
        error: "alias already exists! try another one :)",
      });
    }

    let createUrl = await Url.create(req.body);

    res.json(createUrl);
  } catch (error) {
    console.log(error);
    res.json({
      error: error,
    });
  }
};

module.exports = { createAlias };
