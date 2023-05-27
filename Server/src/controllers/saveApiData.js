const axios = require("axios");
const { Character } = require("../DB_connection");

const getApiData = async () => {
  try {
    let allCharacter = [];
    for (let i = 1; i < 6; i++) {
      let data = await axios(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      const aux = data.data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          origin: character.origin?.name,
          image: character.image,
        };
      });
      allCharacter = [...allCharacter, ...aux];
    }

    return allCharacter;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const saveApiData = async () => {
  try {
    const allCharacter = await getApiData();
    await Character.bulkCreate(allCharacter);
    return allCharacter;
  
  } catch (error) {
    
    return {msg: error.message};
  }
};

module.exports = saveApiData;
