require('dotenv').config();

/**
 * @typedef EnvironmentConfiguration
 * @prop {string} SERVER_HOST Express server host
 * @prop {string} SERVER_PORT Express server port
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
