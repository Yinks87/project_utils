/**
* 
* @returns Random generated id like "e5aacb4d-a99d-5edc-a2d8-f6b817d02692"
*/

function generateRandomId() {
  const crypto = require('crypto');
  const id = crypto.randomBytes(16).toString('hex');
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(16, 4)}-${id.substr(20)}`;
}
