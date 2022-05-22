const { celebrate , Segments} = require("celebrate");
const Joi = require("joi");

const scheme = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const apiValidator = celebrate({
  [Segments.BODY]: scheme,
});

const appValidator = (req, res, next) => {
  const { body } = req;
  req.validation  = scheme.validate(body);
  next();
};
module.exports = {
  scheme,
  appValidator,
  apiValidator
};
