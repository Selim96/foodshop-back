const { Order } = require('../../models');

const getByEmail = async (req, res) => {
    const { email } = req.body;
    const result = await Order.find({ email });
    res.json(result);
};

module.exports = getByEmail;