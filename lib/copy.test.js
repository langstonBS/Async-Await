const fs = require('fs').promises;
const copy = require('./copy');


describe('takes a file and creates a coppy', () => {
  beforeAll(() => {
    return fs.writeFile('./mytext', 'My lab');
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./mytext'),
      fs.unlink('./mytext-copdsfy')
   
    ]);
  });
 
  it('reads the file and then copyies the file', async() => {
    const fileCoppy = await copy('./mytext', './mytext-copy')
      .expect((fileCoppy) => fs.readFile('./mytext',).toEqual('My lab'));
  });

});
