const axios = require("axios");

const pokeAnimalHuman = async () => {
  try {
    const response = await axios.get(
      `${process.env.ANIMAL_DOMAIN}/human/api/poke/me`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
const pokeAnimalMeow = async () => {
  try {
    const response = await axios.get(
      `${process.env.ANIMAL_DOMAIN}/meow/api/poke/me`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { pokeAnimalHuman, pokeAnimalMeow };
