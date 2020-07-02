const fs = require('fs').promises;
const { copy } = require('./copy');


describe('takes a file and creates a coppy', () => {
  
  beforeAll(() => {
    return fs.writeFile('./mytext', 'My lab');
  });

 
  it('copies a file to a new destination', async() => {
    const file = await copy('./mytext', './mytext2');
    const file2 = await fs.readFile('./mytext2', { encoding: 'utf8' });
    
    expect(file2).toEqual('My lab');

  });

});
