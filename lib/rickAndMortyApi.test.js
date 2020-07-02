const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');




describe('Rick and morty', () => {

  it('can fetch a character from the rick and morty api', async() => {
    const character = await getCharacter(1);
  
    expect(character).toEqual({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    });
  });

  it('Get many Chaarictors from Rick and morty', async() => {
    
    const CharArray = await getManyCharacters([1,  2, 3]);
        
    expect(CharArray).toEqual([
      {
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human'
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human'
      },
      {
        name: 'Summer Smith',
        status: 'Alive',
        species: 'Human'
      }
    ]);
  });
});


