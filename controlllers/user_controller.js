const userModel = require("../models/user_model")

const getAllUser = async (req, res) => {
    try {
        const users = await userModel.getAllUser()
        if (!users) res.json({ message: 'Events Not Found' })
        res.json(users)
    }
    catch (error) {
        console.log(error);
        req.json({ message: 'Error Get All Events' })
    }
}

module.exports = { getAllUser }