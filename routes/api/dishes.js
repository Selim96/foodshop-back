const express = require('express');
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.get('/', ctrlWrapper())