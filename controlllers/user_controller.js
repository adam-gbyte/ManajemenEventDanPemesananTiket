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

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id)
        if (user.length > 0) {
            res.status(200).json({ message: 'Sukses', user })
        }
        else {
            res.status(500).json({ message: 'User Not Found' })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get User' })
    }
}

module.exports = {
    getAllUser,
    getUserById
}