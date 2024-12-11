const axios = require("axios");

const pokeHuman = async () => {
  try {
    const a = await axios.get(`${process.env.HUMAN_SERVICE}/poke/me`);
    return a.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { pokeHuman };
