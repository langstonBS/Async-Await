
const fs = require('fs').promises;

const transform = async(str) => {
  const caps = str.replace(/[A-Z]/g, '');

  const uppercase = caps.toUpperCase();

  const reverse = uppercase.split('').reverse().join('');
  
  return reverse;
};

module.exports = {
  transform
};
