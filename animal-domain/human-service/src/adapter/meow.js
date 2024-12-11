const axios = require("axios");

const pokeMeow = async () => {
  try {
    const a = await axios.get(`${process.env.MEOW_SERVICE}/poke/me`);
    return a.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { pokeMeow };
