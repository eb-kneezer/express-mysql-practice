const Joi = require("joi");

function validateBlogRequestBody(blog) {
  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    snippet: Joi.string().min(1).required(),
    content: Joi.string().min(1).required(),
    author_id: Joi.number().integer().required(),
    date_created: Joi.date().iso().required(),
  });

  return schema.validate(blog);
}

module.exports = { validateBlogRequestBody };
