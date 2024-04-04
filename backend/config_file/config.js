require('dotenv').config();

/**
 * @typedef EnvironmentConfiguration
 * @prop {string} SERVER_HOST
 * @prop {string} SERVER_PORT
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 * @prop {string} 
 */

/**
 * @type {EnvironmentConfiguration}
 */
const config = {
  ...process.env,
};

module.exports = config;
