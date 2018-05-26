const express = require('express');
let router = express.Router();
const db = require("../models");

router.use('/email/', require('./email.js'));




module.exports = router;