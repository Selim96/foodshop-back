const express = require('express');
const { ctrlWrapper } = require("../../helpers");
const { validation } = require('../../middlewares');
const { users } = require('../../controllers');
const { joiSchemaUser } = require('../../models');

const router = express.Router();

router.post('/', validation(joiSchemaUser), ctrlWrapper(users.addOrder));

router.post('/history', ctrlWrapper(users.getByEmail));

router.get('/allorders', ctrlWrapper(users.getAll));

module.exports = router;