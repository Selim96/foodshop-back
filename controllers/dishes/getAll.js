const { Dishe } = require('../../models');

const getAll = async (req, res) => {
    const result = await Dishe.find();
    res.json(result);
};

module.exports = getAll;