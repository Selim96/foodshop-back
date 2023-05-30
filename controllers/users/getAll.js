const { Order } = require('../../models');

const getAll = async (req, res) => {
    const result = await Order.find();
    res.json(result);
};

module.exports = getAll;