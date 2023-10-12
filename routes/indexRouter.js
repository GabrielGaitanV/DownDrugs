const express = require("express");
const router = express.Router();

//requiero el controlador
const indexController = require ("../controllers/indexController.js");

router.get("/",indexController.index)

//exporto la ruta
module.exports = router;