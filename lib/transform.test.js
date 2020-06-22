const fs = require('fs').promises;
const { transform } = require('./transformer');

describe('transform function', () => {
  beforeAll(() => {
    return fs.writeFile('./transform.txt', 'tacocatS');
  });

  afterAll(() => {
    return fs.unlink('./transform.txt');
  });

  it('should transform a flie', async() => {
    const change = await transform('tacocatS');
    expect(change).toEqual('TACOCAT');
  });
});
