'use strict';

const yup = require('yup');

const pluginConfigSchema = yup.object().shape({
  cacheDir: yup.string(),
  maxAge: yup.number().moreThan(0),
  paths: yup.array().of(yup.string()),
});

module.exports = {
  pluginConfigSchema,
};
