

const fs = require('fs').promises;

const copy = async(src, dst) => {
  const file = await fs.readFile(src, { encoding: 'utf8' });
  await fs.writeFile(dst, file);
  
  return file;

};

module.exports = {
  copy
};
