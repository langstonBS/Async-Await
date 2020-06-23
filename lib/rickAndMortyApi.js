const request = require('superagent');


const getCharacter = async id => {
  const { body } = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  return {
    id: body._id,
    name: body.name,
    status: body.status,
    species: body.species
  };
};

const getManyCharacters = async id => {
  const { body } = await request.get(`https://rickandmortyapi.com/api/character/${[id, id, id}`);
  return {
    id: body._id,
    name: body.name,
    status: body.status,
    species: body.species
  };
};

module.exports = {
  getCharacter,
  getManyCharacters

};
