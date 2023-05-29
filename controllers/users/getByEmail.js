const { User } = require('../../models');

const getByEmail = async (req, res) => {
    const { email, phone } = req.body;
    const result = await User.find({ email, phone });
    res.json(result);
};

module.exports = getByEmail;