
const fs = require('fs').promises;

const transform = async(str) => {
  let file = await str.replace(/[A-Z]/g, '');
  file = await file.split('');
  file = await file.filter(item => item === item.toLowerCase());
  file = await file.reverse();
  file = await file.join('');
  file = await file.toUpperCase();
  return file;
};

module.exports = {
  transform
};
