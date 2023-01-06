'use strict'

const { config } = require('./config');
const { register } = require('./register')

const plugin = {
  config,
  register,
}

module.exports = plugin