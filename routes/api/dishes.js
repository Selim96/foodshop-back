const express = require('express');
const { ctrlWrapper } = require("../../helpers");
const { dishes } = require('../../controllers');

const router = express.Router();

router.get('/', ctrlWrapper(dishes.getAll));

module.exports = router;