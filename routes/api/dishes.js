const express = require('express');
const { ctrlWrapper } = require("../../helpers");
const { dishes } = require('../../controllers');
const { validation } = require('../../middlewares');
const { joiSchemaDish } = require('../../models');

const router = express.Router();

router.get('/', ctrlWrapper(dishes.getAll));

router.post('/', validation(joiSchemaDish), ctrlWrapper(dishes.add));

module.exports = router;