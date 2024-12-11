const axios = require("axios");

const pokeFlower = async () => {
  try {
    const a = await axios.get(`${process.env.FLOWER_SERVICE}/poke/me`);
    return a.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { pokeFlower };
