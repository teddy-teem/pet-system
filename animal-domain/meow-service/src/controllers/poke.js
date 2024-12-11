const HumanAdapter = require("../adapter/human");

const pokeMe = (req, res) => {
  try {
    const sourceAddress = req.ip || req.connection.remoteAddress;
    res.send({
      service: `I am ${process.env.SERVICE}`,
      message: "Ouch! That tickled! 😄 Poked.  I'm still here, ready to help!",
      your_ip: sourceAddress,
    });
  } catch (error) {
    res.send(error);
  }
};

const vpcPokeMe = (req, res) => {
  try {
    const sourceAddress = req.ip || req.connection.remoteAddress;
    res.send({
      service: `I am ${process.env.SERVICE}`,
      message:
        "Hey, we’re in the same zone! 🌍 You poked me 😊. Let’s make this zone the best place to be! 🚀",
      your_ip: sourceAddress,
    });
  } catch (error) {
    res.send(error);
  }
};

const pokeHuman = async (req, res) => {
  try {
    const response = await HumanAdapter.pokeHuman();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { vpcPokeMe, pokeMe, pokeHuman };
