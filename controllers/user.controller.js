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
updateUser: async(req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User updated successfully", data: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
},
deleteUser: async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully", data: deletedUser });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}
};