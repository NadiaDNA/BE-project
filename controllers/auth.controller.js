const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

module.exports = {
    login: (req, res) => {},

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            if (!name || !password || !email) {
                return res.status(400).json({ message: "All fields are required" });
            }

            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const user = new User({ name, email, password: hashedPassword });
            await user.save();
            res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error", error: error.message });
        }
    }
}