

const fs = require('fs').promises;

const copy = async(src, dst) => {
  const file = await fs.readFile(src, { encoding: 'utf8' });
  const retrunFile =  fs.writeFile(dst, file);
  
  return retrunFile;

};

module.exports = {
  copy
};
