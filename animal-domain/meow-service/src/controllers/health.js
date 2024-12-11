const check = (req, res) => {
  try {
    res.send({
      message: "Healthy service",
      name: process.env.SERVICE,
      timestamp: new Date(),
    });
  } catch (error) {}
};

module.exports = {check}