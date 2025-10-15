const User = require('../models/user.model');

module.exports = {
getAllUser: async (req, res) => {
    try {
        const users = await User.find();
        res.json({message: "Get all users successfully", data: users});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message });
    }
},
getUserById: (req, res) => {
    try {
        const { id } = req.params;
        User.findById(id, (err, user) => {
            if (err) {
                return res.status(500).json({message: "Internal Server Error", error: err.message });
            }
            if (!user) {
                return res.status(404).json({message: "User not found"});
            }
            res.status(200).json(user);
        });
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message });
    }
},
createUser: (req, res) => {
    try {
        const {name, email, password} = req.body;
        const newUser = new User({
            name,
            email,
            password
        });
        newUser.save()

        res.status(201).json({message: 'User created successfully'});
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message });
    }
},
updateUser: (req, res) => {},
deleteUser: (req, res) => {}
}