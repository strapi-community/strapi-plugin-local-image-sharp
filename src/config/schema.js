"use strict";

const yup = require("yup");

const pluginConfigSchema = yup.object().shape({
  cacheDir: yup.string(),
  maxAge: yup.number().moreThan(0),
});

module.exports = {
  pluginConfigSchema,
};
