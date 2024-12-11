const axios = require("axios");

const pokeFruit = async () => {
  try {
    const a = await axios.get(`${process.env.FRUIT_SERVICE}/poke/me`);
    return a.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { pokeFruit };
