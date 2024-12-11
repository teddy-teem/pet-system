const express = require("express");
const healthService = require("../controllers/health");
const pokeService = require("../controllers/poke")

const router = express.Router();

router.get("/health", healthService.check);
router.get("/poke/meow", pokeService.pokeMeow);
router.get("/poke/me", pokeService.pokeMe);
router.get("/vpc/poke/me", pokeService.vpcPokeMe);

module.exports = router ;
